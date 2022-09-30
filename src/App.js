import classes from './App.scss';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from './components/Content/Messages/Messages';
import Dialogs_container from './components/Content/Dialogs/Dialogs_container';
import Wall_container from './components/Content/wall/wall_container';
import SideBar_container from './components/Sidebar/SideBar_container';
import { Users_container } from './components/Content/Users/Users_container';
function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
       <Header/>
      <main>
        <SideBar_container/>
        <div className ='content'>
          <Routes>
            <Route path="/Wall*" element={<Wall_container  />}/>
            <Route path="/Dialogs*" element={<Dialogs_container/>}/>
            <Route path ='/Messages*' element={<Messages/>}/>
            <Route path ='/Users*' element={<Users_container/>}/>
          </Routes>
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
