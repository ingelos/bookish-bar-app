import {useEffect, useState} from "react";
import axios from "axios";


function BrowseRomance() {

    // const [books, setBooks] = useState([]);
    //
    // useEffect(() => {
    //
    //     async function fetchRomance() {
    //         try {
    //             const result = await axios.get('https://openlibrary.org/search.json?q=emma');
    //             console.log(result.docs);
    //             setBooks(result.docs);
    //         } catch (e) {
    //             console.error(e);
    //             console.log('er gaat iets fout')
    //         }
    //     }
    //
    //     fetchRomance();
    //
    // }, []);


    return (
        <div>
            {/*<button type='button' onClick={fetchRomance}>haal op</button>*/}
            {/*{books.length > 0 && (*/}
                <>
                    {/*{Object.keys(books).length > 0 &&*/}
                    {/*<ul>*/}
                        {books.map((book) => (
                            <li key={book.docs.key}>
                                <h2>{book.docs.title}</h2>
                            </li>
                        ))}
                    {/*</ul>*/}
                </>
        </div>
    );

}

export default BrowseRomance;




