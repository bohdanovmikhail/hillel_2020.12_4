import { TEXT_CHANGE_TYPE } from './actions';

const defaultState = {
    text: '',
};

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case TEXT_CHANGE_TYPE:
            return {
                ...state,
                text: action.payload,
            };
        default:
            return state;
    }
}
