import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../../Utils/validations/validators';
import Input from '../../Common/Input/Input';
import classes from './Login.module.scss';


let  LoginForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div className={classes.LoginItems}>
        <div className={classes.LoginItem}>
          <span>Login</span>
          <Field  component={Input} name={'Login'} validate={[requiredField]}/>
        </div>
        <div className={classes.LoginItem}>
          <span>Password</span>
          <Field  component={Input} name={'Password'} validate={[requiredField]}/>
        </div>
        <div className={classes.LoginItem}>
          <span>Remember me</span>
          <Field  component={Input} type={'checkbox'} name={'RemeberMe?'}/>
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
  }
  return(
    <div className={classes.LoginContainer}>
    <h4>Login</h4>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
export default Login;