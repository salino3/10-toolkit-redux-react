import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from "./store";
import { Provider } from "react-redux";
import App from './App';
import { PokemonApp } from './PokemonApp';
import { TodoApp } from './TodoApp';
// npm install @reduxjs/toolkit react-redux
// npm install axios

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <hr/>
     <PokemonApp />
     <hr/>
    <TodoApp />
    </Provider>
  </React.StrictMode>
);


