import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './AuthorPage.css';



function AuthorCard() {

    const [author, setAuthor] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {authorId} = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function getAuthorDetails() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/authors/${authorId}.json`, {
                    signal: controller.signal,
                })
                console.log(data);
                setAuthor(data);

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

        getAuthorDetails();

        return function cleanup() {
            controller.abort();
        }

    }, []);


    return (
        <>
            <section className='detail-page outer-container'>
                <div className='detail-page inner-container'>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}

                    <div className='detail-content-container'>

                        {Object.keys(author).length > 0 &&
                            <>
                                <div className='detail-cover'>
                                    <img src={author.photos[0] ? `https://covers.openlibrary.org/b/id/${author.photos[0]}-M.jpg` : 'no picture available'} alt={''} className='author-img'/>
                                </div>
                                <div className='detail-info'>
                                    <h2>{author.name}</h2>
                                    <p>{author.bio}</p>
                                    <p>Date of birth: {author.birth_date}</p>
                                    <p>{author.links[0].title}: {author.links[0].url}</p>

                                    {/*<p className='first-line'>{book.excerpts[0].comment}: {book.excerpts[0].excerpt}</p>*/}
                                </div>
                            </>
                        }

                        {/*<AddToList />*/}
                    </div>
                </div>
            </section>
        </>
    );
}

export default AuthorCard;

