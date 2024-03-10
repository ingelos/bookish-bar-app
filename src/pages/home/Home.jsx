import './Home.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


function Home() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {bookId} = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function fetchTrending() {
            setLoading(true);
            setError(false);

            try {
                setLoading(true);
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
                    <div className='home-section inner-content-container'>
                        <div className='welcome-message'>
                            <h2>Welcome to Bookish Bar!</h2>
                            <div className='intro-message'>
                                <h3>We like big books and we cannot lie...</h3>
                                <h3>If you do too...</h3>
                                    <h3> <Link
                                        to={'/search-results'}><strong>Search</strong></Link>, <Link
                                        to={'/browse'}><strong>browse</strong></Link> and save books to your <Link
                                        to={'/my-books'}><strong>personal page</strong></Link>!</h3>

                            </div>
                        </div>
                        <div>
                            {loading ? <p>Loading...</p> : (
                                <div>
                                    <div className='title-container'>
                                        <h2 className='list-title'>Trending today:</h2>
                                    </div>
                                    <div className='trending-container'>
                                        {books.length > 0 && (
                                            <>
                                                <div className='trending-list'>
                                                    {books?.map((book) => (
                                                        <li key={book.key} className='cover-home'>
                                                            <img
                                                                src={book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                                                alt='' className='cover-img-home'/>
                                                        </li>
                                                    ))}
                                                </div>
                                                <Link to='/trending'><h3 className='more-link'>More Trending...</h3>
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;