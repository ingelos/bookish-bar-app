import {FaStar} from 'react-icons/fa'
import {useContext, useEffect, useState} from "react";
import './Rating.css'
import {useParams} from "react-router-dom";
import {Rating_Messages} from "../../constants/RatingMessages.jsx";

function getRating() {
    return localStorage.getItem('rating')
    ? JSON.parse(localStorage.getItem('rating'))
        : [];
}

function Rating({hoveredStars, bookKEY})  {
    const [rating, setRating] = useState(getRating());
    const [hover, setHover] = useState(null);
    const [starCounter, setStarCounter] = useState(1);

    useEffect(() => {
        localStorage.setItem('rating', JSON.stringify(rating))
        return () => {};

    }, [rating]);




    return (
        <div className='star-rating' key={bookKEY}>
            {console.log('key', bookKEY)}
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;



                // setStarCounter(starCounter + 1);
                // console.log('key', bookKEY)
                // console.log('counter', starCounter)

                return (
                    <label key={index}>
                        <input
                            type='radio'
                            name='rating'
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        {/*{console.log('rating:', currentRating)}*/}
                        <FaStar
                            className={index <= hoveredStars ? 'hovered-stars' : ''}
                            size={18}
                            color={currentRating <= (hover || rating) ? "#D4B983" : "#D9D9D9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )

            })}
            {/*<p className='rating-message'>{Rating_Messages?.[hoveredStars]}</p>*/}
        </div>
    )
}

export default Rating;