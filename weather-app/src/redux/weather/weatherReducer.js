const initialState = {
  data : [],
}

const weatherReducer = (state = initialState, action) => {
  console.log("REDUCER TRIGGERED")
  switch (action.type) {
    case "SHOW_WEATHER":
      console.log("ACTION TYPE INSIDE REDUCER TRIGGERED")
      // console.log({...state,data:action.payload})
      return {...state,data:action.payload}  
    default: return {state};
  }
}

export default weatherReducer;