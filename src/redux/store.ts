import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {profileReducer} from './reducers/profileReducer';
import { loginReducer } from './reducers/loginReducer';


const rootReducers = combineReducers(
    {
        profile: profileReducer,
        login: loginReducer,
    }
)

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))