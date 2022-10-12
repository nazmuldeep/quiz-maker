import React from 'react';

const Options = ({ quizOption, rightAns }) => {
    return (
        <div className='option'>
            <div className=''>
                <label onClick={() => rightAns(quizOption)} htmlFor="option">
                    <input name='option' type="radio" />
                    <p>{quizOption}</p>
                </label>
            </div>
        </div>
    );
};

export default Options;