import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './AuthorPage.css';
import AuthorDetails from "../../components/authorDetails/AuthorDetails.jsx";


function AuthorPage() {

    const [author, setAuthor] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {authorId} = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function getAuthorDetails() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/authors/${authorId}.json`, {
                    signal: controller.signal,
                })
                console.log(data);
                setAuthor(data);

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

        getAuthorDetails();

        return function cleanup() {
            controller.abort();
        }

    }, []);


    return (
        <>
            <section className='detail-page outer-container'>
                <div className='detail-page inner-container'>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}

                    <div className='detail-content-container'>

                        {Object.keys(author).length > 0 &&

                            <AuthorDetails
                                name={author.name}
                                // bio={JSON.stringify(author.bio)}
                                bio={author.bio?.value || author.bio || ''}
                                birth_date={author.birth_date}
                                death_date={author.death_date}
                                photo={author.photos && author.photos.length > 0 ? `https://covers.openlibrary.org/b/id/${author.photos[0]}-L.jpg` : ''}
                                links={author.links ? author.links[0].url : ''}
                            />
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default AuthorPage;

