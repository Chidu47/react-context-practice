import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

const Rating = ({ rating, onClick, style }) => {
    return (
        <>
            {[...Array(5)].map((_, i) => (
                <span key={i} onClick={() => onClick(i)} style={style}>
                    {rating > i ? (
                        <FaStar fontSize="15px" />
                    ) : (
                        <FaRegStar fontSize="15px" />
                    )}
                </span>
            ))}
        </>
    )
}

export default Rating