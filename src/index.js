import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
// import State, { subscribe } from './redux/State.js';
import Store from './redux/State.js';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree=(State)=>{
  root.render(
    <React.StrictMode>
      <App State={State} addPost={Store.addPost.bind(Store)} changeNewPostText={Store.changeNewPostText.bind(Store)} changeNewMessageText={Store.changeNewMessageText.bind(Store)} addMessage={Store.addMessage.bind(Store)}/>
    </React.StrictMode>
  );
}

rerenderEntireTree(Store.getState());  
Store.subscribe(rerenderEntireTree)

reportWebVitals();
