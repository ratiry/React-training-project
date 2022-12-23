import classes from './Textarea.module.scss';

let Textarea=({input , meta, ...props})=>{
  const ConditionError = meta.error && meta.touched;
  return(
    <>
     <div className={classes.textsContainer }>
      {ConditionError?<p className={classes.errorSpan}>error</p> :null} 
      </div>
      <textarea {...input} {...meta}/>
    </>
  )
}
export default Textarea;