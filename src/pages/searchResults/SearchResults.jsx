import {useState} from "react";
import axios from "axios";


function SearchResults() {

    // const [searchQuery, setSearchQuery] = useState();
    // const [books, setBooks] = useState();
    // const [error, setError] = useState();
    //
    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     setError('');
    //
    //     try {
    //         const response = await axios.get(`https://openlibrary.org/search.json/${searchQuery}`)
    //         const book = response.data[0];
    //         console.log(book);
    //         setBooks(book);
    //         setSearchQuery('');
    //
    //     } catch (e) {
    //         console.error(e);
    //         setError(`${searchQuery} does not exist. Try again.`);
    //     }
    // }


    return (
    <>
    <section className='search-results-page section-column'>
        <div className='search-results-page inner-container'>
            <h2>Search</h2>
            {/*<form className='search-form' onSubmit={handleSubmit}>*/}
            {/*    <input*/}
            {/*        type='text'*/}
            {/*        name='search'*/}
            {/*        id='search-field'*/}
            {/*        placeholder='Search by title or author'*/}
            {/*        value={searchQuery}*/}
            {/*        onChange={(event) => setSearchQuery(event.target.value)}*/}
            {/*    />*/}
            {/*    <button type='submit'>Search</button>*/}
            {/*    {error && <p>{error}</p>}*/}
            {/*</form>*/}
            {/*{Object.keys(books).length > 0 &&*/}
            {/*    <article>*/}
            {/*        <h2>{books.title}</h2>*/}
            {/*    </article>*/}
            {/*}*/}
        </div>
    </section>
    </>
    )
}

export default SearchResults;