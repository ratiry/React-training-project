
export const requiredField = value => value ? undefined : 'Required'  
// export const maxLengthCreator=(maxLength)=>(value)=>{
//   debugger;
//   if (value & value.length>maxLength)  return 'maxLength is '
//   return undefined
// }
export const maxLengthCreator = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

 export const minLengthCreator = min => (value) =>{
  debugger;
  return value && value.length < min ? `Must be at least ${min}` : undefined 
}
// export const minLengthCreator=(minLength)=>(value)=>{
//   if (value & value.length>minLength)  return 'maxLength is ' + minLength
//   return undefined
// }