import React, { useState, useEffect } from 'react';
import {CurrentTime} from "../CurrentTime";

export function Counter() {
    console.log('In start of Counter');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('In useEffect', { count });

        return () => {
            console.log('From result fn of useEffect', { count });
        };
    });

    console.log('Before render');
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <br/>
            Count: {count}
            <br/>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export class _Counter extends React.Component {
    state = {
        count: 0,
    };

    componentDidMount() {
        document.title = 'Counter is ' + this.state.count;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = 'Counter is ' + this.state.count;
    }

    componentWillUnmount() {
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                <button onClick={() => this.setState({ count: count - 1 })}>-</button>
                <br/>
                Count: {count}
                <br/>
                <button onClick={() => this.setState({ count: count + 1 })}>+</button>
            </div>
        );
    }
}
