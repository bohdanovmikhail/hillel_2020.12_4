import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
    inputValue: state.value,
});

const mapDispatch = dispatch => ({
    inputChange: value => dispatch({ type: 'INPUT_CHANGE', payload: value }),
});

function _Input({ inputChange, inputValue, ...rest }) {
    return (
        <input
            {...rest}
            value={inputValue}
            onChange={e => inputChange(e.target.value)}
        />
    );
}

export const Input = connect(mapState, mapDispatch)(_Input);
