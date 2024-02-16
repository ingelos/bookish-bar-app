import './Home.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function Home() {

    const [books, setBooks] = useState([]);
    const [newRelease, setNewRelease] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const controller = new AbortController();

        async function fetchTrending() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/trending/daily.json?limit=5`, {
                    signal: controller.signal,
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
                        {loading && <p>Loading...</p>}
                        <div className='title-container'>
                        <h2 className='list-title'>Trending</h2>
                        </div>


                        <div className='trending-container'>
                        {books.length > 0 && (
                            <>
                            <ul className='trending-list'>
                                {books.map((book) => {
                                    return (
                                        <li key={`${book.key}-${book.cover_edition_key}`} className='cover-home'>
                                            <img src={book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : `${book.title}`} alt='' className='cover-img-home'/>

                                        </li>
                                    )
                                })}
                            </ul>
                            <Link to='/trending'><h3 className='more-link'>More Trending...</h3></Link>
                            </>
                        )
                        }
                        </div>
                        {/*{books.length > 0 &&*/}
                        {/*    <ul className='book-list'>*/}
                        {/*        {books.map((book) => {*/}
                        {/*            return (*/}
                        {/*                <li key={`${book.title}-${book.key}`}>*/}
                        {/*                    /!*<img src={book.cover_edition_key ? `https://covers.openlibrary.org/b/id/${book.cover_edition_key}-M.jpg` : 'no cover available'} alt={`cover of ${book.title}`}/>*!/*/}
                        {/*                    <h2>Title: {book.title}</h2>*/}
                        {/*                </li>*/}
                        {/*            )*/}
                        {/*        })}*/}
                        {/*    </ul>*/}
                        {/*}*/}
                        {/*<h3 className='more-link'>More trending...</h3>*/}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;