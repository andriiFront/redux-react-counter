import { INCREMENT, DECREMENT } from "./types"
import { combineReducers } from "redux"

function counterReducer(state = 0, action) {
  if(action.type === INCREMENT) {
    
    return state + 1
  } else if (action.type === DECREMENT) {
    
    return state - 1
  } 
  
  return state
}

export const rootReducer = combineReducers({
  counter: counterReducer,
})
