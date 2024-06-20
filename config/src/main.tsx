import '/global-shim'; // Adiciona o polyfill de `global`
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

ReactDOM.createRoot(document.getElementById('nauka')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
