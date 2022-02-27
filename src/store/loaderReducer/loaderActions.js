export const SHOW_LOADER = "SHOW_LOADER"; // action
export const HIDE_LOADER = "HIDE_LOADER";


// action creator
const showLoader = () => (dispatch) => {                                   
    dispatch({ type: SHOW_LOADER});
};

export const hideLoader =()=>(dispatch)=>{
      dispatch({type: HIDE_LOADER});
}


export default showLoader;
