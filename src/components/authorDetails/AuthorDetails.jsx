import './AuthorDetails.css'

function AuthorDetails({photo, name, bio, birth_date, death_date, links}) {

    return (
        <article className='detail-container'>
            <div className='detail-article'>
                <div className='detail-author-img'>
                    <img src={photo}
                         alt={`image of ${name}`}
                         className='author-img'
                    />
                </div>
            </div>
            <div className='detail-info'>
                <h2>{name}</h2>
                <p className='bio-author'>{bio}</p>
                <p className='date-link'>Date of birth: {birth_date} {death_date ? `- Date of death: ${death_date}` : ''}</p>
                <p className='author-link'>{links}</p>
            </div>
        </article>
    )
}

export default AuthorDetails;