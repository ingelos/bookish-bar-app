import {Link, useParams} from "react-router-dom";
import './BookCard.css'
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import NoCoverImage from "../../assets/icons/No_Cover.jpg"
import AddToList from "../addToList/AddToList.jsx";

function BookCard({cover, bookId, title, name, author, year, authorId}) {

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
                            <Link to={`/browse/${bookId}`}>
                                {title}
                            </Link>
                        </h3>
                        <h4 className='book-author'>
                            <Link to={`/${authorId}`}>
                                {author}
                            </Link></h4>
                        <p className='book-published'>First published in {year}</p>
                    </div>
                </li>
            </ul>

            <AddToList />
        </div>
    )
}

export default BookCard;