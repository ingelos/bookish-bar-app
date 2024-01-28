import {Link} from "react-router-dom";
import './BookCard.css'

function BookCard({cover, id, title, author, year}) {
    return (
        <div className='book-card'>
            <li className='book-card-list' key={`${title}-${author}`}>
                <img src={cover} alt={`cover of ${title}`} className='book-cover'/>
                <div className='book-card-info'>
                    <h3><Link to={`/books/${id}`} className='book-link'>{title}</Link></h3>
                    <h4>{author}</h4>
                    <p>First published in {year}</p>
                </div>
            </li>
        </div>
    )
}

export default BookCard;