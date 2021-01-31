import React from 'react';
import { connect } from 'react-redux';
import { Input } from './components/Input';

const showValueMapStateToProps = state => ({
    value: state.value,
});

const ShowValue = connect(showValueMapStateToProps)(({ value }) => <div>INPUT VALUE: {value}</div>);

export default function App() {
    return (
        <div>
            <Input placeholder="Enter value" />
            <ShowValue />
        </div>
    );
}
