
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import { Wall_reducer } from './Wall-reducer';
import { Dialogs_reducer } from './Dialogs-reducer';
import { SideBar_reducer } from './SideBar_reducer';
import { Users_reducer } from './Users-reducer';
import { auth_reducer } from './auth_reducer';
import thunk  from 'redux-thunk';
let reducers=combineReducers({
  Wall:Wall_reducer,
  Dialogs:Dialogs_reducer,
  SideBar:SideBar_reducer,
  Users:Users_reducer,
  auth:auth_reducer
})
let store = createStore(reducers,applyMiddleware(thunk));
window.store= store;
export default store;