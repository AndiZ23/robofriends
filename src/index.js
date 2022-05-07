import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Card from './Card';
import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'; //bc robots.js does not export robots using 'default', we have to use {} to destructure

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <StrictMode>
      <CardList robots={robots} />
    </StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
