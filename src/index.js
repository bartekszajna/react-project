import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import store from './store';

function renderApp() {
  localStorage.setItem('todos', JSON.stringify(store.getState().todos));
  ReactDOM.render(<App />, document.querySelector('#root'));
}

store.subscribe(renderApp);

renderApp();
