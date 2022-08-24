
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Wall_reducer } from './Wall-reducer';
import {subscribe} from 'redux';
import { Dialogs_reducer } from './Dialogs-reducer';
let reducers=combineReducers({
  Wall:Wall_reducer,
  Dialogs:Dialogs_reducer,
})
let store = createStore(reducers);
window.store= store;
store.subscribe(()=>{
})
export default store;