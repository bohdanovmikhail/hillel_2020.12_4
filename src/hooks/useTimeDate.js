import { useState, useEffect } from 'react';

export function useTimeDate() {
    const [timeDate, setTimeDate] = useState(new Date().toLocaleString());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeDate(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return timeDate;
}
