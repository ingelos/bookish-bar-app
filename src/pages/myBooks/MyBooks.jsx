import {useState} from "react";
import axios from "axios";


function MyBooks() {
    const [error, setError] = useState();

    async function fetchBackend() {
        setError('');
        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/all')
            console.log(response);
            console.log()
        } catch (e) {
            console.error(error);
        }

    }

    return (
        <div>
            <button type='submit' onClick={fetchBackend}>backend connecten</button>
        </div>
    )

}

export default MyBooks;