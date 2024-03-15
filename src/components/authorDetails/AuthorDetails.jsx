import './AuthorDetails.css'
import NoAuthorPhoto from "../../assets/icons/No_image_available.svg.png";

function AuthorDetails({photo, name, bio, birth_date, death_date, links}) {

function onPhotoError(e) {
    e.target.src = NoAuthorPhoto;
}

    return (
        <article className='author-detail-container'>
            <div className='detail-image'>
                <div className='detail-author-img-container'>
                    <img src={photo ? photo : NoAuthorPhoto}
                         alt=''
                         onError={onPhotoError}
                         className='author-img'
                    />
                </div>
            </div>
            <div className='detail-info-author'>
                <h2>{name}</h2>
                <p className='bio-author'>{bio ? `Bio: ${bio}` : ''}</p>
                <p className='date-link'>{(birth_date ? `Date of birth: ${birth_date}` : '')} {death_date ? `- Date of death: ${death_date}` : ''}</p>
                <p className='author-link'>{links}</p>
            </div>
        </article>
    )
}

export default AuthorDetails;