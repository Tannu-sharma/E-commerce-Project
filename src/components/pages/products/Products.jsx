import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getProductsData from "../../../store/productsReducer/productsActions";
import getProductsDataInCart from "../../../store/cartReducer/cartActions";
import { useNavigate } from "react-router-dom";
import "./products.css";
import Pagination from "../pagination/Pagination";

const Products = () => {                                                                

  //pagination
  const [currentPage, setCurrentPage] = useState(1);

  let navigate = useNavigate();

  let products = useSelector((state) => state.products.productsListing);
  const categoryfilters = useSelector((state) => state.products.categoryFilters);
  const pricefilters = useSelector((state) => state.products.priceFilters);
  const ratingfilters = useSelector((state) => state.products.ratingFilters);
  const searchedFilteredProducts = useSelector((state) => state.products.searchedFilteredProducts);



  const dispatch = useDispatch();

  //searched products
  if(searchedFilteredProducts.length)
    products=searchedFilteredProducts;

  const productList = React.useMemo(() => {
    let filteredProducts = [];

    if (categoryfilters.length && pricefilters.length && ratingfilters.length) {
      const minPrice = pricefilters[0];
      const maxPrice = pricefilters[1];
      const minRating = ratingfilters[0];
      const maxRating = 5;

      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < categoryfilters.length; j++) {
          if (products[i].category === categoryfilters[j] && (products[i].price >= minPrice && products[i].price <= maxPrice) && (products[i].rating.rate >= minRating && products[i].rating.rate <= maxRating)) {
            filteredProducts.push(products[i]);
          }
        }
      }
    }
    else if (categoryfilters.length && pricefilters.length) {
      const minPrice = pricefilters[0];
      const maxPrice = pricefilters[1];
 
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < categoryfilters.length; j++) {
          if (products[i].category === categoryfilters[j] && (products[i].price >= minPrice && products[i].price <= maxPrice)) {
            filteredProducts.push(products[i]);
          }
        }
      }
    }
    else if (pricefilters.length && ratingfilters.length) {
      const minPrice = pricefilters[0];
      const maxPrice = pricefilters[1];
      const minRating = ratingfilters[0];
      const maxRating = 5;

      for (let i = 0; i < products.length; i++) {
          if ((products[i].price >= minPrice && products[i].price <= maxPrice) && (products[i].rating.rate >= minRating && products[i].rating.rate <= maxRating)) {
            filteredProducts.push(products[i]);
          }
      }
    }

    else if (categoryfilters.length && ratingfilters.length) {
      const minRating = ratingfilters[0];
      const maxRating = 5;

      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < categoryfilters.length; j++) {
          if (products[i].category === categoryfilters[j] && (products[i].rating.rate >= minRating && products[i].rating.rate <= maxRating)) {
            filteredProducts.push(products[i]);
          }
        }
      }
    }
    else if (categoryfilters.length) {
      for (let i = 0; i < categoryfilters.length; i++) {
        for (let j = 0; j < products.length; j++) {
          if (products[j].category === categoryfilters[i]) {
            filteredProducts.push(products[j]);
          }
        }
      }
    }
    else if (pricefilters.length) {
      const minPrice = pricefilters[0];
      const maxPrice = pricefilters[1];
      for (let i = 0; i < products.length; i++) {
        if (products[i].price >= minPrice && products[i].price <= maxPrice) {
          filteredProducts.push(products[i]);
        }
      }
    }
    else if (ratingfilters.length) {
      const minRating = ratingfilters[0];
      const maxRating = 5;
      for (let i = 0; i < products.length; i++) {
        if (products[i].rating.rate >= minRating && products[i].rating.rate <= maxRating) {
          filteredProducts.push(products[i]);
        }
      }
    }
    else {
      filteredProducts = products;
    }

    return filteredProducts;
  }, [products, categoryfilters, pricefilters, ratingfilters]);

  useEffect(() => {
    dispatch(getProductsData([]));
  }, []);

  //pagination
  const positionOfLastProduct = currentPage * 3;
  const positionOfFirstProduct = positionOfLastProduct - 3;
  const finalProductsToDisplay = productList.slice(positionOfFirstProduct, positionOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <React.Fragment>
      <div className="productsContainer">
        {finalProductsToDisplay.map((data, key) => {
          return (
            <div className="product" key={key}>
              <div
                onClick={() => {
                  navigate(`/${data.id}`);
                }}
              >
                <img src={data.image} className="productsPhoto" />
                <br />
                <p className="productTitle">{data.title}</p>
                <p className="productCategory">{data.category}</p>
                <p className="productRating">&#x2B50;{data.rate}</p>
                <p className="productPrice">$ {data.price}</p>
              </div>
              {/* <div className="quantityDiv">
              <span className="quantityLabel">Quantity : </span>
              <input type="number" className="quantityInput" />
              </div> */}

              <button
                className="addToCartButtonInProducts"
                onClick={() => dispatch(getProductsDataInCart(products[key]))}
              >
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
      <Pagination totalProducts={productList.length} paginate={paginate} currentPage={currentPage} />
    </React.Fragment>
  );
};

export default Products;
