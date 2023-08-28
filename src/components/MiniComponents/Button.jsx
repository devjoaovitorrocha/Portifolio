import React from 'react';

import './Button.css';

const Button = (props) => {
    return(
        <button style={{backgroundColor: `${props.color}`}}>
            {props.content}
        </button>
    )
}

export default Button