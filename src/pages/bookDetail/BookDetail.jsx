import axios from "axios";
import {useEffect, useState} from "react";

function BookDetail() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {work} = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function fetchRomance() {
            setError(false);
            setLoading(true);

            try {
                const {data} = await axios.get(`https://openlibrary.org/works/${work}/${title}`, {
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
    <>

    </>
)



}
export default BookDetail;