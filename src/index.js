import React from 'react';
import ReactDOM from 'react-dom/client';
//import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
 import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// Dev tools pour consulter les actions sur la base 
// Soit en passant par l'extension graphique redux dev tools ou bien directement par la console
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger'

import {applyMiddleware, configureStore} from '@reduxjs/toolkit'

import userReducer from "./reducers/user.reducer";

const store = configureStore({
    reducer:{
        users: userReducer,
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
