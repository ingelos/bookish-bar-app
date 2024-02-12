import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../../../components/pagination/Pagination.jsx";
import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";


function BrowseFantasy() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [works, setWorks] = useState(0);


    useEffect(() => {
        const controller = new AbortController();

        async function fetchFantasy() {
            setError(false);
            setLoading(true);

            try {
                const {data} = await axios.get(`https://openlibrary.org/subjects/fantasy.json`, {
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

        fetchFantasy();

        return function cleanup() {
            controller.abort();
        }

    }, []);




    return (
        <>
            <BrowseSubject
                books={books}
                works={works}
                subject='Fantasy'
            />
        </>

    )
}

export default BrowseFantasy;