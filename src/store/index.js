import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';

import { formDataReducer } from './formData';
import { contactListReducer } from './contactList';

const reducer = combineReducers({
    form: formDataReducer,
    contactList: contactListReducer,
});

const loggerMW = createLogger({
    collapsed: true,
});

const middleware = applyMiddleware(reduxThunk, loggerMW);

export const store = createStore(reducer, middleware);
