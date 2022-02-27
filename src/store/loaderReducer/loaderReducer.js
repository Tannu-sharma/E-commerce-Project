import {SHOW_LOADER, HIDE_LOADER } from "./loaderActions";

const loaderReducerInitialStates = {
  isLoader: false,
}

const loaderReducer = (state = loaderReducerInitialStates, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoader: true,
      }
    case HIDE_LOADER:
      return{
        ...state,
        isLoader: false,
      }
    default:
      return state
  }
}

export default loaderReducer;
