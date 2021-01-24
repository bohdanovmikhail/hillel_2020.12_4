import { useState, useEffect } from 'react';

export function useTimer() {
    const [time, setTime] = useState(0);
    const [enabled, setStatus] = useState(null);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (enabled) {

            }
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return [
        time,
        () => setStatus(true),
        () => setStatus(false),
        () => {
            setStatus(false);
            setTime(0);
        },
    ];
}
