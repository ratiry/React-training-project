import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import State from './redux/State.js';
import { addPost, changeNewPostText,changeNewMessageText,addMessage } from './redux/State.js';
// import State from './redux/State.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree=(State)=>{
  root.render(
    <React.StrictMode>
      <App State={State} addPost={addPost} changeNewPostText={changeNewPostText} changeNewMessageText={changeNewMessageText} addMessage={addMessage}/>
    </React.StrictMode>
  );
}
