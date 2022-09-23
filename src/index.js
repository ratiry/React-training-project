import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
// import State, { subscribe } from './redux/State.js';
import store from './redux/redux-strore.js';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>      
    <Provider store={store}>
        <App  />
    </Provider>
  </React.StrictMode>
);


//  createStore(reducers).subscribe(()=>{
//   rerenderEntireTree();
// })

reportWebVitals();