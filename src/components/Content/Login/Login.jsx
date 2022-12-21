import classes from './Login.module.scss';

let Login=(props)=>{
  return(
    <div className={classes.LoginContainer}>
    <h4>Login</h4>
    <LoginForm/>
    </div>
  )
}
let LoginForm=()=>{
  return(
    <form>
      <div className={classes.LoginItems}>
        <div className={classes.LoginItem}>
          <span>Login</span>
          <input type="text" />
        </div>
        <div className={classes.LoginItem}>
          <span>Password</span>
          <input type="text" />
        </div>
        <div className={classes.LoginItem}>
          <span>Remember me</span>
          <input type="checkbox" />
        </div>
      </div>
      <button className={classes.Login_button}>
        <span>Login</span>
      </button>
    </form>
  )
}
export default Login;