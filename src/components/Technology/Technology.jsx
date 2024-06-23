import React from 'react';

import './Technology.css';

import html from '../../assets/Typescript_logo_2020.svg.png';
import css from '../../assets/Python-logo-notext.svg.png';
import js from '../../assets/mongodb_original_wordmark_logo_icon_146425.webp';
import sql from '../../assets/sql.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';

const Technology = () => {
    return (
        <div className='technology'>
            <h1>Technologies</h1>
            <div className='technology__icons'>
                <div><img src={html} alt="html" width={100 + 'rem'}/></div>
                <div><img src={css} alt="html" width={100 + 'rem'}/></div>
                <div><img src={js} alt="html" width={100 + 'rem'}/></div>
                <div><img src={node} alt="html"/></div>
                <div><img src={sql} alt="html"/></div>
                <div><img src={react} alt="html"/></div>
            </div>
        </div>
    )
}

export default Technology