import React from 'react';
import Options from '../Options/Options';

const Question = ({ quizQuestion }) => {
    const { correctAnswer, question, options } = quizQuestion;
    const rightAns = (option) => {
        if (option === correctAnswer) {
            console.log('correct Answer')
        }
        else {
            alert('This is wrong answer')
        }
    }


    return (
        <div>
            <div className="quiz-question">
                {question}
            </div>
            <div className="option-container">
                {
                    options.map(option => <Options
                        key={option}
                        quizOption={option}
                        rightAns={rightAns}
                    ></Options>)
                }
            </div>

        </div>
    );
};

export default Question;