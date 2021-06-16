import React from 'react';
import './Card.css';    

const Card = (props) => {
<<<<<<< HEAD
    const classes = 'details-card p-4 my-4 mr-4 ' + props.className;
=======
    const classes = 'details-card ' + props.className;
>>>>>>> ff81e77a1caa8694b77b56eb6fa8c60839500082
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;
