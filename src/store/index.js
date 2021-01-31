import { createStore } from 'redux';

function reducer(state, action) {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                value: action.payload,
            };
    
        default:
            return state;
    }
}

export const store = createStore(reducer, {
    value: '',
});
