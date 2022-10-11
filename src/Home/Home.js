import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData()
    const allTopics = topics.data;
    return (

        <div>
            <h2>Quiz topic: {topics.data.length}</h2>
            <div className='home-container'>
                <div className="quiztopics-container">
                    {
                        allTopics.map(topic => <Topic key={allTopics.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;