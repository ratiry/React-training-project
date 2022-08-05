import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import State, { subscribe } from './redux/State.js';
import './index.scss';
import App from './App';
import { addPost, changeNewPostText,changeNewMessageText,addMessage } from './redux/State.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree=(State)=>{
  root.render(
    <React.StrictMode>
      <App State={State} addPost={addPost} changeNewPostText={changeNewPostText} changeNewMessageText={changeNewMessageText} addMessage={addMessage}/>
    </React.StrictMode>
  );
}

rerenderEntireTree(State);  
subscribe(rerenderEntireTree)

reportWebVitals();
