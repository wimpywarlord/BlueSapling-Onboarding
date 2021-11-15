
interface IState {
  data ?: {}[]
}

const initialState : IState  = {
  data : [],
}

interface IAction {
  type : string,
  payload : {}[],
}

const weatherReducer = (state: IState = initialState, action : IAction): IState => {
  console.log("REDUCER TRIGGERED")
  switch (action.type) {
    case "SHOW_WEATHER":
      console.log("ACTION TYPE INSIDE REDUCER TRIGGERED")
      // console.log({...state,data:action.payload})
      return {...state,data:action.payload}  
    default: return {...state};
  }
}

export default weatherReducer;