import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  // const root = document.getElementById('root');
  const store = configureStore();
  // ReactDOM.render(<h1>Welcome to index.jsx</h1>, root);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  // window.getState = store.getState;
});
