import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/*Explicación de las siguientes lineas en: https://es.legacy.reactjs.org/docs/rendering-elements.html*/
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(  //se lanza el componente App.tsx; React.StrictMode para que se escriba de forma más estricta y se cometan menos errores
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);