import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './BookDetailPage.css';
import BookDetails from "../../components/bookDetails/BookDetails.jsx";



function BookDetailPage() {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {bookId} = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function getBookDetails() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/works/${bookId}.json`, {
                    signal: controller.signal,
                })
                console.log(data);
                // setBook(data);

                const authorKey = data.authors ? data.authors[0].author.key.replace('/authors/', '') : '';
                if (authorKey) {
                    const authorName = await getAuthorName(authorKey);
                    setBook({
                        ...data,
                        authorName,
                    });
                } else {
                    setBook(data);
                }
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is cancelled');
                } else {
                    console.error(e);
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        }


        async function getAuthorName(authorKey) {
            const authorDetailsUrl = `https://openlibrary.org/authors/${authorKey}.json`

            try {
                const response = await axios.get(authorDetailsUrl, {
                    signal: controller.signal,
                })

                const authorName = response.data.name;
                console.log('author name:', authorName)
                return authorName;

            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is cancelled');
                } else {
                    console.error(e);
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        }

        getBookDetails();

        return function cleanup() {
            controller.abort();
        }

    }, [bookId]);


    return (
        <>
            <section className='detail-page outer-container'>
                <div className='detail-page inner-container'>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    <div className='detail-content-container'>

                        {Object.keys(book).length > 0 &&

                            <BookDetails
                                cover={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg` : 'no cover available'}
                                title={book.title}
                                authorName={book.authorName}
                                description={book.description.value ? book.description.value : book.description}
                                excerpts={book.excerpts ? `First line: ${book.excerpts[0].excerpt}` : ''}
                                links={book.links ? `${book.links[0].title}: ${book.links[0].url}` : ''}
                            />
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookDetailPage;

