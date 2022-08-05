import logo from './logo.svg';
import classes from './App.scss';
import './App.scss';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar.jsx';
import Dialogs from './components/Content/Dialogs/Dialogs.jsx';
import Wall from './components/Content/wall/wall';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from './components/Content/Messages/Messages';
function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
       <Header/>
      <main>
        <SideBar/>
        <div className ='content'>
          <Routes>
            <Route path="/Wall*" element={<Wall 
            DataPosts={props.State.Wall.DataPosts} 
            addPost ={props.addPost} 
            new_text={props.State.Wall.new_text}
            changeNewPostText={props.changeNewPostText} />}/>

            <Route path="/Dialogs*" element={<Dialogs 
            dataMessages={props.State.Dialogs.dataMessages} 
            dataUsers={props.State.Dialogs.dataUsers}
            new_text_Dialogs={props.State.Dialogs.new_text_Dialogs}
            changeNewMessageText={props.changeNewMessageText}
            addMessage={props.addMessage}/>}/>

            <Route path ='/Messages*' element={<Messages/>}/>
          </Routes>
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
