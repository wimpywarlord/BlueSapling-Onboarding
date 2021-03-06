const deafultState = {
  currentUser : {},
}

function reducer(state = deafultState, action){
  switch(action.type){
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload
      }
      default: return state
  }
}

export default reducer;