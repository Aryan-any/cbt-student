import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionNavigation from '../components/QuestionNavigation';
import Timer from '../components/Timer';

const StudentPortal = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        axios.get('/api/questions').then((res) => setQuestions(res.data));
    }, []);

    const handleTimeUp = () => {
        alert('Time is up! Submitting your test...');
    };

    return (
        <div className="student-portal">
            <Timer duration={3600} onTimeUp={handleTimeUp} />
            <QuestionNavigation questions={questions} setCurrentQuestion={setCurrentQuestion} />
            {questions[currentQuestion] && (
                <div className="question">
                    <h3>{questions[currentQuestion].questionText}</h3>
                    {questions[currentQuestion].options.map((option, i) => (
                        <button key={i}>{option}</button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StudentPortal;
