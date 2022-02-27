import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import './loader.css';

const Loader = () => {
    const isLoader = useSelector((state) => state.loader.isLoader);
    const dispatch = useDispatch();

    return (
        (isLoader && <div className='loaderContainer'>
            <span className="loader"></span>
        </div>)
    )
}

export default Loader;
