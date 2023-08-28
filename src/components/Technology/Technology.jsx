import React from 'react';

import './Technology.css';

import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import sql from '../../assets/sql.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';

const Technology = () => {
    return (
        <div className='technology'>
            <h1>Technologies</h1>
            <div className='technology__icons'>
                <div><img src={html} /></div>
                <div><img src={css} /></div>
                <div><img src={js} /></div>
                <div><img src={node} /></div>
                <div><img src={sql} /></div>
                <div><img src={react} /></div>
            </div>
        </div>
    )
}

export default Technology