import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/header/App';
import reportWebVitals from './reportWebVitals';
import Content from './components/Content/Content';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Content/>
  </React.StrictMode>
);
