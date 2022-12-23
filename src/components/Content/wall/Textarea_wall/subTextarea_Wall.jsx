import classes from './Textarea_wall.module.scss';

let subTextarea_Wall=({input , meta, ...props})=>{
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
export default subTextarea_Wall;