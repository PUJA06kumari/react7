import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Movie from './Movie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Movie />
    <Movie />
    <Movie />
    <Movie />
    <Movie />
  </React.StrictMode>
);

