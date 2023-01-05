
export let GetUsersReselect=(state)=>{
  return state.Users.Users_array
}
export let GetPagesize=(state)=>{
  return state.Users.PageSize
}
export let GetTotalUsersCount=(state)=>{
  return state.Users.TotalUsersCount
}
export let GetCurrentPage=(state)=>{
  return state.Users.CurrentPage
}
export let GetBeforeCurrentPageArray=(state)=>{
  return state.Users.BeforeCurrentPageArray
}
export let GetAfterCurrentPageArray=(state)=>{
  return state.Users.AfterCurrentPageArray
}
export let GetLengthPageArray=(state)=>{
  return state.Users.LengthPageArray
}
export let GetIsFetching=(state)=>{
  return state.Users.IsFetching
}
export let GetIsfollowingInProgress=(state)=>{
  return state.Users.IsfollowingInProgress
}