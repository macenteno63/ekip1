import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Dev tools pour consulter les actions sur la base 
// Soit en passant par l'extension graphique redux dev tools ou bien directement par la console
// import {composeWithDevTools} from 'redux-devtools-extension';
// import logger from 'redux-logger'
//
//
//
// const store = createStore(
//   rootReducer, composeWithDevTools(applyMiddleware(thunk,logger))
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
