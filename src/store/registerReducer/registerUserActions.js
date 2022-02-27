export const GET_USER_DATA = "GET_USER_DATA"; 

export const registerUser = (userData) => async (dispatch) => {                                                       //getState contain all the redux states we use this if we want another state of store in actions
    try {
      const userSignUpData = await fetch('http://localhost:3001/signUp',
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(res=> res.json())
      .then(data=> console.log(data));
      // .catch(err => console.log(err));

      dispatch({ type: GET_USER_DATA, payload: {userSignUpData} });
    } 
    catch (error) {
      console.log(error);
    }
  };