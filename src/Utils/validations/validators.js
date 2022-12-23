
export const requiredField = value => value ? undefined : 'Required'  

export const maxLengthCreator = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

 export const minLengthCreator = min => (value) =>{
  return value && value.length < min ? `Must be at least ${min}` : undefined 
}
