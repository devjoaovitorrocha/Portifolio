import React from 'react';

import './Button.css';


const Button = (props) => {
    return(
        <button style={{backgroundColor: `${props.color}`}} onClick={props.onclick}>
            {props.content}
        </button>
    )
}

export default Button