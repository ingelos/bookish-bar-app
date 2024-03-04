import {Link} from "react-router-dom";
import './BookCard.css'
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import NoCoverImage from "../../assets/icons/No_Cover.jpg"

function BookCard({cover, bookId, title, id, author, year, authorId}) {

    const noCoverImage = NoCoverImage;

    function onImageError(e) {
        e.target.src = NoCoverImage
    }

    return (
        <div className='book-card'>
            <div className='book-card-result-container'>
                <div
                    className='book-card-list'
                    key={id}
                >
                    <Link to={`/browse/${bookId}`}>
                    <img
                        src={cover ? cover : noCoverImage}
                        alt=''
                        onError={onImageError}
                        className='book-cover'
                    /> </Link>
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
                        <p className='book-published'>{year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard;


