import React from 'react'
import "./404-button.styles.css"

const Button404 = ({ eventHandler }) => {
    return (
        <div className="error-404">
            <button onClick={eventHandler} className="button-404">Oops, Something went wrong Click to try again.</button>
        </div>
    );
}

export default Button404;