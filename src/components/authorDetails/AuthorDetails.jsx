import './AuthorDetails.css'

function AuthorDetails({photo, name, bio, birth_date, death_date, value, links}) {

    return (
        <article className='detail-container'>
            <div className='detail-article'>
                <div className='detail-author-img'>
                    <img src={photo ? photo : 'no image available'} alt=''
                        className='author-img'
                    />
                </div>
            </div>
            <div className='detail-info'>
                <h2>{name}</h2>
                <p className='bio-author'>{bio ? bio : ''}</p>
                <p>Date of birth: {birth_date} {death_date ? `- Date of death: ${death_date}` : ''}</p>
                <p>{links ? links : ''}</p>
            </div>
        </article>
    )
}

export default AuthorDetails;