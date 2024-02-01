import {useEffect, useState} from "react";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import BookList from "../../components/bookList/BookList.jsx";
import {Link} from "react-router-dom";



function SearchResults() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')



    useEffect(() => {
        const controller = new AbortController();

        async function fetchSearchResults() {
            setError(false);

            try {
                const {data} = await axios.get(`https://openlibrary.org/search.json?q=${searchQuery}`, {
                    signal: controller.signal,
                });
                console.log(data);
                console.log(data.docs);
                setBooks(data.docs);
                setSearchQuery('')
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is cancelled');
                } else
                    console.error(e);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchSearchResults()

        return function cleanup() {
            controller.abort();
        }

}, [searchQuery])


                return (
                    <section className='search-result-section outer-container'>
                        <div className='search-result-section inner-conatiner'>

                            {/*<SearchBar*/}
                            {/*    onChange={(searchQuery) => {setSearchQuery(searchQuery)}}*/}
                            {/*    />*/}
                            {/*<form className='search-bar' onSubmit={fetchSearchResults}>*/}
                                <input
                                    type='text'
                                    id='search-bar-input'
                                    placeholder='Search by title or author...'
                                    value={searchQuery}
                                    onChange={fetchSearchResults}
                                />
                                <button
                                    className='search-bar-button'
                                    type='submit'
                                    onClick={fetchSearchResults}
                                />
                            {/*</form>*/}




                                        {/*<ul>*/}
                                        {/*    {books.map((book) => {*/}
                                        {/*        return (*/}
                                        {/*            <div className='book-card'>*/}
                                        {/*                <li className='book-card-list' key={`${title}-${author}`}>*/}
                                        {/*                    <img src={cover} alt={`cover of ${title}`} className='book-cover'/>*/}
                                        {/*                    <div className='book-card-info'>*/}
                                        {/*                        <h3><Link to={`/books/${id}`} className='book-link'>{title}</Link></h3>*/}
                                        {/*                        <h4>{author}</h4>*/}
                                        {/*                        <p>First published in {year}</p>*/}
                                        {/*                    </div>*/}
                                        {/*                </li>*/}
                                        {/*            </div>*/}
                                        {/*        )*/}
                                        {/*    })}*/}
                                        {/*</ul>*/}
            </div>
        </section>
    )

}

export default SearchResults;



