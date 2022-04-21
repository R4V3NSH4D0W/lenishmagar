import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client"
//import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import { render } from '@testing-library/react';
const container=document.getElementById('App');
const root=createRoot(container);
root.render(<App/>)
/*
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
