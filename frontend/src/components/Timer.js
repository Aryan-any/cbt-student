import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        if (timeLeft <= 0) {
            clearInterval(timer);
            onTimeUp();
        }

        return () => clearInterval(timer);
    }, [timeLeft]);

    return <div className="timer">{timeLeft}s</div>;
};

export default Timer;
