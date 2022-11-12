import {
  INCREMENT,
  DECREMENT,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS,
  TOGGLE_THEME
} from "./types";

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function asyncIncrement() {
  return function(dispatch) {
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch(increment())
      dispatch(enableButtons())
    }, 1500)
  }
}

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS
  }
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS
  }
}

export function toggleTheme() {
  return {
    type: TOGGLE_THEME
  }
}
