import { applyMiddleware, combineReducers, createStore } from 'redux';
import charcterReducer from './charcterReducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    charcterInfo: charcterReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store