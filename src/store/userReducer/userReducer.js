import { REGISTER_USER, REMOVE_AUTHENTICATION } from "./userActions";
const userReducerInitialStates = {
  email: '',
  isAuthenticate: false,
}

const userReducer = (state = userReducerInitialStates, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        email: action.payload.email,
        isAuthenticate: true,
      }
    case REMOVE_AUTHENTICATION:
        return{
          ...state,
          email: '',
          isAuthenticate: false,
        }
  
    default:
      return state
  }
}

export default userReducer;
