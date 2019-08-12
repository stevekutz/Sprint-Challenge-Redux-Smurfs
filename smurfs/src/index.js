import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { createStore, applyMiddleware } from 'redux';   // COMMENT OUT for dev TOOLS
import { Provider } from 'react-redux';
//import /* You need some sort of reducer */ './reducers';
import rootReducer from './reducers';

/*
const store = createStore(
  () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(//be sure to throw in the proper middlewares here)
);
*/

import { applyMiddleware, createStore, compose } from "redux";
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, enhancer);


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement);
