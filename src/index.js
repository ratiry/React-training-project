import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dataUsers=[
  {name:'Jem',id:1},
  {name:'Jack',id:2},
  {name:'Jerry',id:3},
  {name:'ggggggggggggg',id:4, },
];
let dataMessages=[
  { message:'Hi'},
  { message:'gibberish'},
  { message:'fdghj'},
]
let DataPosts= [
  {name:'Slava',message:'dgddg', Likes:15},
  {name:'Horward',message:'fgfgf',Likes :10},
  {name:'Quizee',message:'ggggg',Likes:0},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataUsers={dataUsers} dataMessages={dataMessages} DataPosts={DataPosts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
