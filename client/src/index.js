import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { changePage, toggleModal, setUserState } from './reducers/reducers';

const logger = createLogger();
const rootReducer = combineReducers({ changePage, toggleModal, setUserState });
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render((
    <Provider store = {store}>
        <App />
    </Provider>
    ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
