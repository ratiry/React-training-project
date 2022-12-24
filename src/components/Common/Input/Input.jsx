import classes from './Input.module.scss'
let Input=({input , meta, ...props})=>{
  const ConditionError = meta.error && meta.touched;
  return(
    <>
      <input {...input} {...meta} placeholder={ConditionError? meta.error: ''}/>
    </>
  )
}
export default Input;