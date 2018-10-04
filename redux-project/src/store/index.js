import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import loginReducer from '../Login/Redux/reducer';

const store = createStore(combineReducers({ root: rootReducer, login: loginReducer }),  
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
);

export const dispatch = store.dispatch;

export default store;
 