import React from 'react';

import './Technology.css';

import typescript from '../../assets/Typescript_logo_2020.svg.png';
import github from '../../assets/github2.png';
import mongodb from '../../assets/mongodb_original_wordmark_logo_icon_146425.webp';
import sql from '../../assets/sql.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';

const Technology = () => {
    return (
        <div className='technology' id='technology'>
            <h1>Technologies</h1>
            <div className='technology__icons'>
                <div><img src={typescript} alt="html" width={100 + 'rem'}/></div>
                <div><img src={github} alt="html" width={100 + 'rem'}/></div>
                <div><img src={mongodb} alt="html" width={100 + 'rem'}/></div>
                <div><img src={node} alt="html"/></div>
                <div><img src={sql} alt="html"/></div>
                <div><img src={react} alt="html"/></div>
            </div>
        </div>
    )
}

export default Technology