import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import { applyMiddleware, compose } from "redux";
import { configureStore} from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reducers from './reducers';



const store = configureStore({ reducer: Reducers, middleware: [thunk] });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
reportWebVitals();
