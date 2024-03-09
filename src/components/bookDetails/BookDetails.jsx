
function BookDetails({cover, title, authorName, excerpts, links, description}) {

    return (
        <div className='detail-article'>
            <div className='detail-cover'>
                <img
                    src={cover}
                    alt={''} className='detail-cover-img'/>
            </div>
            <div className='detail-info'>
                <h2>{title}</h2>
                <h3>{authorName}</h3>
                <p className='detail-description'>{description}</p>
                <p><em>{excerpts}</em></p>
                <p className='book-link'>{links}</p>
            </div>
        </div>
    )
}

export default BookDetails;