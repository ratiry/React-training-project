import classes from './App.scss';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from './components/Content/Messages/Messages';
import Dialogs_container from './components/Content/Dialogs/Dialogs_container';
import Wall_container from './components/Content/wall/wall_container';
import SideBar_container from './components/Sidebar/SideBar_container';
import  Users_container  from './components/Content/Users/Users_container';
import HeaderComponent from './components/Header/Header_container';
import Login from './components/Content/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { GetAuthThunk } from './redux/auth_reducer';
import {Initialize_App_Thunk} from './redux/App-reducer';
import Preloader from './components/Common/Preloader/Preloader';
class App extends React.Component {
  componentDidMount(){
    this.props.Initialize_App_Thunk();
  }
  render(){
    if(!this.props.IsIninitialized){
      return <Preloader/>
    }else{
      return (
        <BrowserRouter>
        <div className="App">
           <HeaderComponent/>
          <main>
            <SideBar_container/>
            <div className ='content'>
              <Routes>
                <Route path='/Wall'>
                  <Route path="/Wall/:userId*" element={<Wall_container  />}/>
                  <Route path="/Wall" element={<Wall_container  />}/>
                </Route>
                <Route path="/Dialogs*" element={<Dialogs_container/>}/>
                <Route path ='/Messages*' element={<Messages/>}/>
                <Route path ='/Users*' element={<Users_container/>}/>
                <Route path='/login*' element={<Login/>}/>
              </Routes>
            </div>
          </main>
        </div>
        </BrowserRouter>
      );
    }
    }
}

let mapDispatchToProps={
  GetAuthThunk,Initialize_App_Thunk
}
let mapStateToProps=(State)=>({
  IsIninitialized:State.App.IsIninitialized
})
export default connect(mapStateToProps  ,mapDispatchToProps)(App);
