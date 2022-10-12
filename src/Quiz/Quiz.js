import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Sidebar from '../Sidebar/Sidebar';

const Quiz = () => {
    const allQuestion = useLoaderData();
    const { questions, name } = allQuestion.data;
    return (
        <div>
            <div className="title-quiz">
                <h1>Hey learner Welcome to {name} quiz</h1>
                <h3>Number of question are {questions.length}</h3>
            </div>
            <div className="information-container">
                <div className="quiz-container">
                    {
                        questions.map(question => <Question
                            key={question.id}
                            quizQuestion={question}
                        >
                        </Question>)
                    }
                </div>
                <div>
                    <Sidebar></Sidebar>
                </div>
            </div>

        </div>
    );
};

export default Quiz;