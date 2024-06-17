import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from './context/ApiContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>
);