import logo from './logo.svg';
import classes from './App.scss';
import './App.scss';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar.jsx';
import Dialogs from './components/Content/Dialogs/Dialogs.jsx';
import Wall from './components/Content/wall/wall';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from './components/Content/Messages/Messages';
import Dialogs_container from './components/Content/Dialogs/Dialogs_container';
function App(props) {
  debugger
  return (
    <BrowserRouter>
    <div className="App">
       <Header/>
      <main>
        <SideBar/>
        <div className ='content'>
          <Routes>
            <Route path="/Wall*" element={<Wall Wall={props.State.Wall} 
            dispatch={props.dispatch} />}/>

            <Route path="/Dialogs*" element={<Dialogs_container 
            Dialogs={props.State.Dialogs} 
           dispatch={props.dispatch}/>}/>
            <Route path ='/Messages*' element={<Messages/>}/>
          </Routes>
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
