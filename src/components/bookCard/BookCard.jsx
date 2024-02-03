import {Link} from "react-router-dom";
import './BookCard.css'

function BookCard({cover, id, title, name, author, year}) {


    return (
        <div className='book-card'>
            <li
                className='book-card-list'
                key={`${title}-${name}`}
            >
                <img
                    src={cover}
                    alt={'no cover available'}
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
        </div>
    )
}

export default BookCard;