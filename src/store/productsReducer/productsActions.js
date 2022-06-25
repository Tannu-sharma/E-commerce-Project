import showLoader, { hideLoader } from "../loaderReducer/loaderActions";

export const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA"; 
//clear actions
export const CLEAR_ALL_FILTERS="CLEAR_ALL_FILTERS";
export const CLEAR_FILTERS_CATEGORY="CLEAR_FILTERS_CATEGORY";
export const CLEAR_FILTERS_PRICE="CLEAR_FILTERS_PRICE";
export const CLEAR_FILTERS_RATING="CLEAR_FILTERS_RATING";
//update actions
export const UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_CATEGORY = "UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_CATEGORY";
export const UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_PRICE="UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_PRICE";
export const UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_RATING="UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_RATING";

export const UPDATE_SEACHED_PRODUCTS= "UPDATE_SEACHED_PRODUCTS";

const getProductsData = () => async (dispatch) => {                                                       //getState contain all the redux states we use this if we want another state of store in actions
  try {
    dispatch(showLoader());
    // const productData = await fetch('http://localhost:3001/products').then(res=>res.json());                                          //this api is created by me 
    const productData = await fetch('https://fakestoreapi.com/products/').then(res=>res.json());                                         //this is extrnal api link
    dispatch({ type: GET_PRODUCTS_DATA, payload: {productData} });
    dispatch(hideLoader());

  } catch (error) {
    console.log(error);
    dispatch(hideLoader());
  }
};

//clear action creators
export const clearAllFilters=()=>(dispatch)=>{
  dispatch({type: CLEAR_ALL_FILTERS});
}

export const clearFiltersCategory=()=>(dispatch)=>{
  dispatch({type: CLEAR_FILTERS_CATEGORY});
}
export const clearFiltersPrice=()=>(dispatch)=>{
  dispatch({type: CLEAR_FILTERS_PRICE});
}
export const clearFiltersRating=()=>(dispatch)=>{
  dispatch({type: CLEAR_FILTERS_RATING});
}

//update action creators
export const UpdateFilterCategory =(categoryFilters)=>(dispatch, getState)=>{
  let category_filters= getState().products.categoryFilters; 
   const isCategoryPresent = category_filters.some((item)=>item===categoryFilters);   
   (!isCategoryPresent) ? (category_filters.push(categoryFilters)) : (category_filters=category_filters.filter((item)=>item!==categoryFilters));

   dispatch({type: UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_CATEGORY, payload:{category_filters}})
}

export const UpdateFilterPrice =(priceFilters)=>(dispatch)=>{
  const minPriceFilters= priceFilters.minValue;
  const maxPriceFilters=priceFilters.maxValue;

  dispatch({type: UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_PRICE, payload:{minPriceFilters,maxPriceFilters}})
}
export const UpdateFilterRating =(ratingFilters)=>(dispatch)=>{
    dispatch({type: UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_RATING, payload:{ratingFilters}})
}

//seached products action creator
export const updateSearchedProducts=(searchedFilteredProducts)=>(dispatch)=>{
  dispatch({type: UPDATE_SEACHED_PRODUCTS, payload:{searchedFilteredProducts}})
}

export default getProductsData;
