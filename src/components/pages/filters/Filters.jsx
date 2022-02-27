import React,{useState} from 'react';
import './filters.css';
import { useDispatch } from "react-redux";
import { UpdateFilterCategory,UpdateFilterPrice,UpdateFilterRating,clearFiltersCategory,clearFiltersPrice,clearFiltersRating, getFilteredProductsBasedOnPrice, getFilteredProductsBasedOnRating, removeFilteredProductsBasedOnPrice, removeFilteredProductsBasedOnRating, clearAllFilters} from '../../../store/productsReducer/productsActions';

const filterRatingInitialState = {
    '4': false,
    '3': false,
    '2': false,
    '1': false,
}
const priceInitialState = {
    priceValueOne: false,
    priceValueTwo: false,
    priceValueThree: false,
    priceValueFour: false,
}
const Filters = () => {
    const dispatch = useDispatch();
    //local states
    const [filterCategory, setFilterCategory] = useState({
        menClothing: false,
        womenClothing: false,
        jewelery: false,
        electronics: false,
    })

    const [filterPrice, setFilterPrice] = useState(priceInitialState);
    const [filterRating, setFilterRating] = useState(filterRatingInitialState);

    const categoryMapping ={
        menClothing: "men's clothing",
        womenClothing: "women's clothing",
        jewelery: "jewelery",
        electronics: "electronics",
    }

    const priceMapping ={
      priceValueOne: {
          minValue: 0,
          maxValue: 10,
      },
      priceValueTwo: {
        minValue: 10,
        maxValue: 500,
      },
      priceValueThree: {
        minValue: 500,
        maxValue: 900,
      },
      priceValueFour: {
        minValue: 900,
        maxValue: 1100,
      }
    }

     //handle methods
    const handleFilterCategory = (e) => {
        dispatch(UpdateFilterCategory(categoryMapping[e.target.name]));
        setFilterCategory((prevState) => {
            return{
                ...prevState,
                [e.target.name]: !prevState[e.target.name],                                                     //it just show and hide checkbox 
                 
            };
        });
    };
    const handleFilterPrice = (e) => {
        dispatch(UpdateFilterPrice(priceMapping[e.target.value]));
        
        setFilterPrice((prevState) => {
            return{
                ...priceInitialState,
                [e.target.value]: !prevState[e.target.value],                                                     //it just show and hide checkbox 
            };
        });
    };

    const handleFilterRating = (e) => {
        dispatch(UpdateFilterRating(e.target.value));
        setFilterRating((prevState) => {
            return{
                ...filterRatingInitialState,
                [e.target.value]: !prevState[e.target.value],                                                     //it just show and hide checkbox 
            };
        });
    };

    //clear methods
    const clearAllProductFilters = () => {
        dispatch(clearAllFilters());
        clearFilterCategory();
        clearFilterPrice();
        clearFilterRating();
    }

    const clearFilterCategory = (e) => {
        dispatch(clearFiltersCategory());
        setFilterCategory((prevState) => {
            return{
                ...prevState,
                menClothing: false,
                womenClothing: false,
                jewelery: false,
                electronics: false,
            };
        });
        
    };
    const clearFilterPrice = (e) => {
        dispatch(clearFiltersPrice());

        setFilterPrice((prevState) => {
            return{
                ...prevState,
                priceValueOne: false,
                priceValueTwo: false,
                priceValueThree: false,
                priceValueFour: false,
            };
        });
    };

    const clearFilterRating = (e) => {
        dispatch(clearFiltersRating());
        setFilterRating((prevState) => {
            return{
                ...prevState,
                '4': false,
                '3': false,
                '2': false,
                '1': false,
            };
        });
    };

    return (
        <div className='filtersBody'>
        <div className='filtersContainer'>
            <div><h1 className='filterHeading'>Filters</h1></div>
            <button className='clearFiltersButton' onClick={()=>clearAllProductFilters()}>Clear All</button>
            <div className='filters'>
                <div>
                    <div>
                        <span className='filter'>Categories</span>
                        <button className='clearCategoriesButton' onClick={clearFilterCategory}>Clear Categories</button>
                    </div>
                    <input type="checkbox" name="menClothing"  className='category' checked={filterCategory.menClothing} onClick={handleFilterCategory} />Men's Clothing <br/>
                    <input type="checkbox" name="womenClothing" className='category' checked={filterCategory.womenClothing} onClick={handleFilterCategory} /> Women's Clothing   <br/>
                    <input type="checkbox" name="electronics" className='category' checked={filterCategory.electronics} onClick={handleFilterCategory}/> Electronics        <br/>
                    <input type="checkbox" name="jewelery" className='category' checked={filterCategory.jewelery} onClick={handleFilterCategory} /> Jewellery          <br/>
                </div>
                <div>
                    <div>
                        <span className='filter'>Price</span>
                        <button className='clearPriceButton' onClick={clearFilterPrice}>Clear Prices</button>
                    </div>
                    <input type="radio" name="price" value='priceValueOne' className='price' checked={filterPrice.priceValueOne} onClick={handleFilterPrice}/> Below $10      <br/>
                    <input type="radio" name="price" value='priceValueTwo' className='price' checked={filterPrice.priceValueTwo}  onClick={handleFilterPrice}/> $10 - $500      <br/>
                    <input type="radio" name="price" value='priceValueThree' className='price' checked={filterPrice.priceValueThree}  onClick={handleFilterPrice}/> $500 - $900    <br/>
                    <input type="radio" name="price" value='priceValueFour' className='price' checked={filterPrice.priceValueFour}  onClick={handleFilterPrice} /> Above $900    <br/>
                </div>
                <div className='ratingDiv'>
                    <div>
                        <span className='filter'>Ratings</span>
                        <button className='clearRatingButton' onClick={clearFilterRating}>Clear Ratings</button>
                    </div>
                    <input type="radio" name="rating" value='4' className='rating' checked={filterRating['4']} onClick={handleFilterRating}/> 4&#11089; and Above    <br/>
                    <input type="radio" name="rating" value='3' className='rating' checked={filterRating['3']} onClick={handleFilterRating}/> 3&#11089; and Above    <br/>
                    <input type="radio" name="rating" value='2' className='rating' checked={filterRating['2']} onClick={handleFilterRating} /> 2&#11089; and Above   <br/>
                    <input type="radio" name="rating" value='1' className='rating' checked={filterRating['1']} onClick={handleFilterRating} /> 1&#11089; and Above   <br/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Filters;
