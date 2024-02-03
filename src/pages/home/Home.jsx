import './Home.css'
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        const controller = new AbortController();

        async function fetchTrending() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/trending?limit=5`, {
                    'Accept': 'application/json',
                    signal: controller.signal,
                });

                console.log(data);
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
                    <div className='home-section list-items'>
                        <h2 className='list-title'>New Releases</h2>
                        <ul className='book-list'>
                        </ul>
                        <h3 className='more-link'>More new...</h3>
                    </div>
                    <div className='home-section list-items'>
                        <h2 className='list-title'>Trending</h2>
                        <>
                            {/*{loading && <p>Loading...</p>}*/}
                            {/*{Object.keys(books).length > 0 &&*/}
                            {/*    <ul className='book-list'>*/}
                            {/*        {books.map((book) => {*/}
                            {/*            return (*/}
                            {/*                <li key={`${book.title}-${book.cover_id}`}>*/}
                            {/*                    <img src={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : 'no cover available'} alt={`cover of ${book.title}`}/>*/}
                            {/*                </li>*/}
                            {/*            )*/}
                            {/*        })}*/}
                            {/*    </ul>*/}
                            {/*}*/}
                        </>
                        <h3 className='more-link'>More trending...</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;