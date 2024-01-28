import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


function BookDetail() {
    const [book, setBook] = useState([]);
    const [error, setError]= useState(false);
    const {id} = useParams();

    useEffect(() => {

        async function getBookDetail() {
            setError(false);

            try {
                const response = await axios.get(`https://openlibrary.org/books/${id}`)
                console.log(response.data);
                setBook(response.data);

            } catch(e) {
                console.error(error);
                setError(true);
            }
        }

        getBookDetail();

        }, []);


    return (
        <div>
            {Object.keys(book).length > 0 && (
                    <>
                        <h2>{book.title}</h2>
                    </>
            )}
        </div>
    )


}

export default BookDetail;


