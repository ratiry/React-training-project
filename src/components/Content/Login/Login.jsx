import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../../Utils/validations/validators';
import Input from '../../Common/Input/Input';
import classes from './Login.module.scss';
import { LoginThunk } from '../../../redux/auth_reducer';
import { Navigate } from 'react-router-dom';
let  LoginForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div className={classes.LoginItems}>
        <div className={classes.LoginItem}>
          <span>Login</span>
          <Field  component={Input} name={'Email'} validate={[requiredField]}/>
        </div>
        <div className={classes.LoginItem}>
          <span>Password</span>
          <Field  component={Input} type='password'  name={'Password'} validate={[requiredField]}/>
        </div>
        <div className={classes.LoginItem}>
          <span>Remember me</span>
          <Field  component={Input} type="checkbox" name={'RememberMe'}/>
        </div>
      </div>
      <button className={classes.Login_button}>
        <span>Login</span>
      </button>
    </form>
  )
}
let LoginReduxForm= reduxForm({form:'Login'})(LoginForm)
let Login=(props)=>{
  const onSubmit=(formData)=>{
    console.log(formData);
    props.LoginThunk(formData.Email,formData.Password,formData.RememberMe);
  }
  debugger;
  if(props.IsAuth){
    return <Navigate to={'/Wall'}/>
  }
  return(
    
    <div className={classes.LoginContainer}>
      <h4>Login</h4>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
let MapDidspatchToProps={
  LoginThunk
}
let MapStateToProps=(state)=>{
  return{
    IsAuth:state.auth.IsAuth
  }
}
export default connect(MapStateToProps,MapDidspatchToProps)(Login);