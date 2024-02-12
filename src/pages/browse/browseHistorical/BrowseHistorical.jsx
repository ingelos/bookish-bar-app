import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "../../../components/bookCard/BookCard.jsx";



function BrowseHistorical() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [works, setWorks] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchHistoricalFiction() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/subjects/historical_fiction.json`, {
                    params: {
                        limit: 20,
                    },
                    signal: controller.signal,
                });

                console.log(data);
                console.log(data.works);
                setBooks(data.works);
                setWorks(data.work_count);


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

        fetchHistoricalFiction();

        return function cleanup() {
            controller.abort();

        }
    }, []);


    return (

        <BrowseSubject
            books={books}
            works={works}
            subject='Historical Romance'
        />
    )
}

export default BrowseHistorical;

