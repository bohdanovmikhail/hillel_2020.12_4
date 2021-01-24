import React from 'react';
import { useTimeDate } from '../../hooks/useTimeDate';


export const CurrentTime = () => <div>{useTimeDate()}</div>;
export const CurrentTimePrefixed = ({ prefix }) => <div>{prefix} {useTimeDate()}</div>;

export class _CurrentTime extends React.Component {
    state = {
        timeDate: this.getTimeDate(),
    };

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                timeDate: this.getTimeDate(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                {this.state.timeDate}
            </div>
        );
    }

    getTimeDate() {
        return new Date().toLocaleString();
    }
}
