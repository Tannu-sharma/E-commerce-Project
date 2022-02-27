import { CLEAR_ALL_FILTERS,CLEAR_FILTERS_CATEGORY,CLEAR_FILTERS_PRICE,CLEAR_FILTERS_RATING, GET_PRODUCTS_DATA ,UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_CATEGORY,UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_PRICE,UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_RATING, UPDATE_SEACHED_PRODUCTS} from "./productsActions";

const productsReducerInitialStates = {
  productsListing: [],
  categoryFilters: [],
  priceFilters: [],
  ratingFilters: "",
  searchedFilteredProducts: [],
}

const productsReducer = (state = productsReducerInitialStates, action) => {
  switch (action.type) {
    case CLEAR_ALL_FILTERS:
      return{
        ...state,
        categoryFilters: [],
        priceFilters: [],
        ratingFilters: [],
      }
    case CLEAR_FILTERS_CATEGORY:
      return{
        ...state,
        categoryFilters:[],
      }
    case CLEAR_FILTERS_PRICE:
      return{
        ...state,
        priceFilters:[],
      }
    case CLEAR_FILTERS_RATING:
      return{
        ...state,
        ratingFilters: "",
      }
    case GET_PRODUCTS_DATA:
      return {
        ...state,
        productsListing: action.payload.productData,
      }
    case UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_CATEGORY:
      return{
        ...state,
        categoryFilters: [...action.payload.category_filters],
      }
    case UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_PRICE:
      return{
        ...state,
        priceFilters: [action.payload.minPriceFilters,action.payload.maxPriceFilters],
      }
    case UPDATE_FILTERED_PRODUCTS_DATA_BASED_ON_RATING:
      return{
        ...state,
        ratingFilters: action.payload.ratingFilters,
      }
    case UPDATE_SEACHED_PRODUCTS:
      return{
        ...state,
        searchedFilteredProducts: [...action.payload.searchedFilteredProducts],
      }
    default:
      return state
  }
}

export default productsReducer;
