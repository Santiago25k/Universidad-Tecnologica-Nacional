import React from 'react';
import ReactDOM from 'react-dom/client';

/* React Router v.6 */
import { BrowserRouter } from "react-router-dom";
/* Reac Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
/* estilos css */
import './estilos/principal.css';
import './estilos/inicio.css';




import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);


