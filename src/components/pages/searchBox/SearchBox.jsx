import React from 'react';
import { useSelector, useDispatch} from "react-redux";
import { updateSearchedProducts } from '../../../store/productsReducer/productsActions';

const SearchBox = () => {

    const products = useSelector((state) => state.products.productsListing);
    const dispatch = useDispatch();
    
    const getOutput = (e) => {
      const searchedProducts= products.filter((data)=>{
              if((data.title).toLowerCase().includes((e.target.value).toLowerCase()))
              {
                return data;
              }
        })
        dispatch(updateSearchedProducts(searchedProducts));
        // console.log(searchedProducts);
    }
   
    const debounce = (fn, d) =>{
        let timer;
  
        return function () {
            let context = this, args = arguments;
            clearTimeout(timer);
            
            timer = setTimeout(() => {
                 fn.apply(context, args);
            }, d)
        }
    }

  const debounceFun = debounce((e)=>getOutput(e),500);

    return (
        <input type="text" className="navBarInputBox" placeholder="Search for products, brands and more..." onChange={(e)=>debounceFun(e)} />
    );
}

export default SearchBox;
