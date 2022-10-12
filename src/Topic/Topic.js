import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({ topic }) => {
    const { logo, name } = topic;
    console.log(topic)
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h4>{name}</h4>
            <button className='button'>Start quiz</button>
            {/* <Link className='quiz-button' to={`/topic/${id}`}>Start quiz</Link> */}
        </div>
    );
};

export default Topic;