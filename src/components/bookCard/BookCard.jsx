import {Link, useParams} from "react-router-dom";
import './BookCard.css'
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import NoCoverImage from "../../assets/icons/No_Cover.jpg"

function BookCard({cover,  title, name, author, year, bookList, setBookList}) {


    const {id} = useParams();
    const {isAuth} = useContext(AuthContext);
    const noCoverImage = NoCoverImage;

    function onImageError(e) {
        e.target.src = NoCoverImage
    }

    return (
        <div className='book-card'>
            <ul className='book-card-result-container'>
                <li
                    className='book-card-list'
                    key={`${title}-${name}`}
                >
                    <img
                        src={cover ? cover : noCoverImage}
                        alt=''
                        onError={onImageError}
                        className='book-cover'
                    />
                    <div className='book-card-info'>
                        <h3 className='book-link'>
                            <Link to={`/browse/${id}`}>
                                {title}
                            </Link>
                        </h3>
                        <h4 className='book-author'>{author}</h4>
                        <p>First published in {year}</p>
                    </div>
                </li>
            </ul>
            {isAuth ?
                <div className='book-list-add'>
                    <label htmlFor='book-list'>
                        <select
                            id='add-to-list'
                            name='add-to-list'
                            value={bookList}
                            onChange={(e) => setBookList(e.target.value)}
                        >
                            <option value='want-to-read'>
                                Want to read
                            </option>
                            <option value='read'>
                                Read
                            </option>
                        </select>
                    </label>
                </div>
                :
                <div className='book-list-add'>
                    <Link to={'/login'}>
                        <select id='add-to-list'>
                            <option value='want-to-read'>
                                Want to read
                            </option>
                        </select>
                    </Link>
                </div>
            }

        </div>
    )
}

export default BookCard;