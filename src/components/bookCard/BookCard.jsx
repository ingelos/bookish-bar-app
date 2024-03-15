import {Link} from "react-router-dom";
import './BookCard.css'
import NoCoverImage from "../../assets/icons/No_Cover.jpg"


function BookCard({cover, bookId, title, author, year, authorId}) {

    function onImageError(e) {
        e.target.src = NoCoverImage
    }

    return (
        <div className='book-card'>
                <div
                    className='book-card-list'
                >
                    <Link to={`/browse/${bookId}`}>
                    <img
                        src={cover ? cover : NoCoverImage}
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
                        <p className='book-published'>{year ? year : ''}</p>
                    </div>
                </div>
        </div>
    )
}

export default BookCard;


