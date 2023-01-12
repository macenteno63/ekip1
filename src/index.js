import React from 'react';
import ReactDOM from 'react-dom/client';
//import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
 import { Provider } from 'react-redux';

import {configureStore} from '@reduxjs/toolkit'

import userReducer from "./reducers/user.reducer";
import postReducer, {fetchPost} from "./reducers/postSlice"
import utilisateursSlice, {fetchUsers} from "./reducers/utilisateursSlice";
import eventReducer, {fetchEvent} from "./reducers/eventSlice";

const store = configureStore({
    reducer:{
        users: userReducer,
        post: postReducer,
        utilisateurs: utilisateursSlice,
        event: eventReducer
    },
})
store.dispatch(fetchPost());
store.dispatch(fetchEvent())
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
