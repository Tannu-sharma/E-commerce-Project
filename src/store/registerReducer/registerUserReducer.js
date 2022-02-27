import { GET_USER_DATA} from "./registerUserActions";
const registerUserReducerInitialStates = {
 signUpUserData: [],
}

const registerUserReducer = (state = registerUserReducerInitialStates, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        signUpUserData: action.payload.userSignUpData,
      }
  
    default:
      return state
  }
}

export default registerUserReducer;
