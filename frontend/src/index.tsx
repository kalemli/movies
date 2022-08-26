import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MovieProvider from './context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
