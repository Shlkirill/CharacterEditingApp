import { applyMiddleware, combineReducers, createStore } from 'redux';
import charcterReducer from './charcterReducer';
import thunkMiddleware from 'redux-thunk';
import allCharcterReducerforUpload from './allCharcterReducerforUpload';

let rootReducer = combineReducers({
    charcterInfo: charcterReducer,
    allCharcters: allCharcterReducerforUpload
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store