import {
  INCREMENT,
  DECREMENT,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS
} from "./types"
import { combineReducers } from "redux"

function counterReducer(state = 0, action) {
  if(action.type === INCREMENT) {
    
    return state + 1
  } else if (action.type === DECREMENT) {
    
    return state - 1
  } 
  
  return state
}

function hideBtnsReducer(state = false, action) {
  switch(action.type) {
    case ENABLE_BUTTONS:
      return false
    
    case DISABLE_BUTTONS:
      return true
    
    default:
      return state
  } 
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  hideBtns: hideBtnsReducer
})
