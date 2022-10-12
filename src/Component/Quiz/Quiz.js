
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Sidebar from '../Question/Sidebar/Sidebar';

import './Quiz.css'


const Quiz = () => {
    const allquestions = useLoaderData();;
    const { name, questions } = allquestions.data;
    return (
        <div>
            <div className="Quiz_title">
                <h1>Hey learners Welcome to the {name} quiz</h1>
                <p>Total Question={questions.length}</p>
            </div>
            <div className="info_container">
                <div className="quiz_container">
                    {
                        questions.map(question => <Question
                            key={question.id}
                            qizquestion={question}
                        ></Question>)
                    }
                </div>
                <div className="">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Quiz;