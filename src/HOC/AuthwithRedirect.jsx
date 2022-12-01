
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
export let WithRedicrectComponent=(Component)=>{
  debugger;
  let RedirectComponent=(props)=>{
    if(props.IsAuth===false) return <Navigate to='/login'/>
    return <Component {...props}/>
  }
  let mapStateToPropsWithAuth=(state)=>({
    IsAuth:state.auth.IsAuth
  })
  let RedirectComponentContainer=connect(mapStateToPropsWithAuth)(RedirectComponent);
  return RedirectComponentContainer;
}