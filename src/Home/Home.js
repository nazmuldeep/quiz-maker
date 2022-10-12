import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData()
    const allTopics = topics.data;
    return (



        <div className='home-container'>
            <div className="header-title">
                <h2>Do practice. Practice Makes a man perfect</h2>
                <p>Total quiz topic :{allTopics.length}</p>
            </div>
            <div className="quiztopics-container">
                {
                    allTopics.map(topic =>
                        <Topic key={allTopics.id}
                            topic={topic}></Topic>)
                }
            </div>
        </div>

    );
};

export default Home;