import React from 'react';
import ReactDOM from 'react-dom/client';
//import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
 import { Provider } from 'react-redux';

import {configureStore} from '@reduxjs/toolkit'

import userReducer from "./reducers/user.reducer";
import postReducer from "./reducers/postSlice"
import eventReducer from "./reducers/event.reducer";

const store = configureStore({
    reducer:{
        users: userReducer,
        post: postReducer,
        events: eventReducer,
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
