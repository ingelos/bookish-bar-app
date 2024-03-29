import './Home.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function Home() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchTrending() {
            setLoading(true);
            setError(false);

            try {
                // setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/trending/daily.json`, {
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
            <section className='home-section outer-container'>
                <div className='home-section inner-container'>
                    {error && <p>Error...</p>}
                    {loading ? <p>Loading...</p> : (
                    <div className='home-section inner-content-container'>
                        <div className='welcome-message'>
                            <div className='intro-message'>
                                <h2>Welcome to Bookish Bar!</h2>
                                <h2>The bar that serves books...</h2>
                            </div>
                            <div className='dictionary-bookish'>
                                <h4><strong>bookish</strong> [ book-ish ]</h4>
                                <h4><em>adjective</em></h4>
                                <h4>1. (of a person or way of life) devoted to reading and studying</h4>
                            </div>
                        </div>
                        <div className='trending-inner-container'>
                            <div className='preview-title-container'>
                                <h2 className='list-title'>Trending today</h2>
                            </div>
                            <div className='preview-trending-container'>
                                {books.length > 0 && (
                                    <>
                                        <div className='preview-list'>
                                            {books?.map((book) => (
                                                <li key={book.key} className='cover-home'>
                                                    <img
                                                        src={book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                                        alt='' className='cover-img-home'/>
                                                </li>
                                            ))}
                                        </div>
                                        <Link to='/trending'><h3 className='more-link'>More Trending...</h3></Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Home;