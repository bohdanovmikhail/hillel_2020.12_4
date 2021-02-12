import { CONTACT_LIST_FETCH_DONE } from './actions';

const defaultState = [];

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case CONTACT_LIST_FETCH_DONE:
            return action.payload;
        default:
            return state;
    }
}
