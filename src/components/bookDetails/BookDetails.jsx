import NoCoverImage from "../../assets/icons/No_Cover.jpg";
import './BookDetails.css'
import {Link} from "react-router-dom";

function BookDetails({cover, title, authorName, excerpts, links, description, firstPublished}) {

    const noCoverImage = NoCoverImage;

    function onImageError(e) {
        e.target.src = NoCoverImage
    }

    return (
        <div className='book-detail-article'>
            <div className='detail-cover'>
                <img
                    src={cover ? cover : noCoverImage}
                    alt=''
                    onError={onImageError}
                    className='detail-cover-img'
                />
            </div>
            <div className='book-detail-info'>
                <h2>{title}</h2>
                <h3 className='author-name'>
                    {authorName}
                </h3>
                <p className='detail-description'>{description}</p>
                <p><em>{excerpts}</em></p>
                <p>{firstPublished}</p>
                <p className='book-link'>{links}</p>

            </div>
        </div>
    )
}

export default BookDetails;