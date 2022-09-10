import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
// import State, { subscribe } from './redux/State.js';
import Store from './redux/redux-strore.js';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree=(State)=>{
  root.render(
    <React.StrictMode>
      <Provider Store={Store}>
          <App  />
      </Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree(Store.getState());  
Store.subscribe(()=>{
  let state= Store.getState();
  rerenderEntireTree();
})

reportWebVitals();