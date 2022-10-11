import React from 'react';
import './Topic.css'
const Topic = ({ topic }) => {
    const { logo, name } = topic;
    console.log(topic)
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h4>{name}</h4>
            <button>Start quiz</button>
        </div>
    );
};

export default Topic;