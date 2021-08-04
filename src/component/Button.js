import React from 'react';
import "./Button.css";

function Button({text}) {
    return (
        <div className="button">
             <p className="button--btn">{text}</p>
        </div>
    )
}

export default Button
