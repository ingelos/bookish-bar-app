import {useEffect, useState} from "react";
import axios from "axios";
import './BrowseRomance.css'
import Pagination from "../../../components/pagination/Pagination.jsx";


function BrowseRomance() {

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

            try {
                setLoading(true);

                let endpoint = `https://openlibrary.org/subjects/${subject}.json`
                if (`${subject} === 'mystery'`) {
                    endpoint = `https://openlibrary.org/subjects/mystery.json`;
                }

                const {data} = await axios.get(endpoint, {
                    signal: controller.signal,
                });

                console.log(data);
                console.log(data.works);
                setBooks(data.works);
                setWorks(data.work_count);

                localStorage.setItem("bookData", JSON.stringify(data));
                console.log("Data fetched and stored in local storage:", data);


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
            localStorage.clear();
        }

    }, [subject]);



    return (


    )
}

export default BrowseRomance;


