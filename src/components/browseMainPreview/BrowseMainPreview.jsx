import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import NoCoverImage from "../../assets/icons/No_Cover.jpg";
import './BrowseMainPreview.css'

function BrowseMainPreview({subject, subjectTitle}) {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const noCoverImage = NoCoverImage;


    useEffect(() => {
        const controller = new AbortController();

        async function fetchTrending() {
            setLoading(true);
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/subjects/${subject}.json`, {
                    signal: controller.signal,
                    params: {
                        limit: 5
                    }
                });
                console.log(data.works);
                setBooks(data.works);

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

        fetchTrending();


        return function cleanup() {
            controller.abort();
        }

    }, []);


    return (
        <>

            {error && <p>error</p>}
            {loading ? <p>Loading...</p> : (
                <div className='browse-preview-inner-container'>
                    <div className='preview-title-container'>
                        <h2 className='list-title'>{subjectTitle}</h2>
                    </div>
                    <div className='browse-preview-container'>
                        {books.length > 0 && (
                            <>
                                <div className='browse-preview-list'>
                                    {books?.map((book) => (
                                        <li key={book.key} className='cover-browse'>
                                            <img
                                                src={book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : noCoverImage}
                                                alt=''
                                                className='cover-img-browse'/>
                                        </li>
                                    ))}
                                </div>
                                <Link to={`/browse/${subject}`}><h3 className='more-link'>More {subjectTitle}...</h3>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default BrowseMainPreview;