import React from 'react';

const QuestionNavigation = ({ questions, setCurrentQuestion }) => {
    return (
        <div className="question-navigation">
            {questions.map((q, index) => (
                <button
                    key={index}
                    className={`question-btn ${q.status}`}
                    onClick={() => setCurrentQuestion(index)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default QuestionNavigation;
