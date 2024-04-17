import React, { useState } from 'react';
import './Style.css';

const StarRating = ({ numberOfStars }) => {
    const [rating, setRating] = useState(0);
    const handleClick = (starValue) => {
        setRating(starValue);
    };
    return (
        <div className="star-rating">
            {[...Array(numberOfStars)].map((item, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        className={starValue <= rating ? 'star selected' : 'star'}

                        onClick={() => handleClick(starValue)}
                    >
                        ★ {item}
                    </span>
                );
            })}
            <p>Selected rating: {rating}</p>
        </div>
    );
};

export default StarRating;