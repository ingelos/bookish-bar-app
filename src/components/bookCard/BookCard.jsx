import {Link} from "react-router-dom";

function BookCard({ cover, id, title, author, year}) {
    return (
        <li key={`${title}-${author}`}>
            <img src={cover} alt={`cover of ${title}`} />
            <h2><Link to={`/books/${id}`}>{title}</Link></h2>
            <h3>{author}</h3>
            <p>First published in {year}</p>
        </li>
    )
}

export default BookCard;