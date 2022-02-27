export const REGISTER_USER = "REGISTER_USER"; // action
export const REMOVE_AUTHENTICATION ="REMOVE_AUTHENTICATION";

// action creators
export const registerUser = (email) => (dispatch, getState) => {
  dispatch({ type: REGISTER_USER, payload: { email } });
};

export const removeAuthentication = () => (dispatch, getState) => {
  dispatch({ type: REMOVE_AUTHENTICATION });
};
