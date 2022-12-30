import classes from './Input.module.scss'
let Input=({input , meta, ...props})=>{
  const ConditionError = meta.error && meta.touched;
  if(meta.error){
    console.log(meta.error);

  }
  return(
    <div className={classes.InputContainer}>
      <span>{ConditionError && meta.error}</span>
      <input className={ConditionError && classes.error} {...input} {...meta} placeholder={ConditionError? meta.error: ''}/>
    </div>
  )
}
export default Input;