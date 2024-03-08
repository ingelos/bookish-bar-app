import {FaStar} from 'react-icons/fa'
import {useEffect, useState} from "react";
import './Rating.css'

function getBookRating(bookKey) {
    const allRatings = JSON.parse(localStorage.getItem('ratings')) || {};
    return allRatings[bookKey] || 0;
}

function setBookRating(bookKey, rating) {
    const allRatings = JSON.parse(localStorage.getItem('ratings')) || {};
    allRatings[bookKey] = rating;
    localStorage.setItem('ratings', JSON.stringify(allRatings));
}

function Rating({hoveredStars, bookKEY}) {
    const [rating, setRating] = useState(getBookRating(bookKEY));
    const [hover, setHover] = useState(null);

    useEffect(() => {
        setBookRating(bookKEY, rating);
    }, [bookKEY, rating]);


    return (
        <div className='star-rating' key={bookKEY}>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;

                return (
                    <label key={index}>
                        <input
                            type='radio'
                            name={`rating-${bookKEY}`}
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
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

        </div>
    )
}

export default Rating;