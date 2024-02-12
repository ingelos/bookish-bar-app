import {useEffect, useState} from "react";
import axios from "axios";
import './BrowseMagic.css'

import Pagination from "../../../components/pagination/Pagination.jsx";
import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";



function BrowseMagic() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [works, setWorks] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchRomance() {
            setError(false);
            setLoading(true);

            try {
                const {data} = await axios.get(`https://openlibrary.org/subjects/magic.json`, {
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

        fetchRomance();

        return function cleanup() {
            controller.abort();
        }

    }, []);



    return (

        <BrowseSubject
            books={books}
            works={works}
            subject='Magic'
        />

    )
}

export default BrowseMagic;


