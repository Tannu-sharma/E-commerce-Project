import React, { useMemo } from 'react';
import './pagination.css';

const Pagination = (props) => {
const pageNumbers=[];

const paginationPageNumbers = useMemo(()=>{
    
    const totalPages = Math.ceil(props.totalProducts/3);
    for(let i=0;i< totalPages;i++){
        pageNumbers.push(i+1);
    }
    return pageNumbers;

},[pageNumbers]);

const backPageNoByOne = () => {
    if(props.currentPage > 1)
         props.paginate(props.currentPage - 1);
}
const forwardPageNoByOne = () => {
    if(props.currentPage < paginationPageNumbers.length)
        props.paginate(props.currentPage + 1);
}
    
    return (
        <React.Fragment>
            <div className='paginationDiv'>
             <button className='paginationButtons' onClick={backPageNoByOne}>&laquo;</button>
            {
                paginationPageNumbers.map((data,key) => {
                    return(
                        <button className={(props.currentPage===data)?'activeClass':'paginationButtons'} onClick={() => props.paginate(data)} key={key}>{data}</button>
                )})
            }
            <button className='paginationButtons' onClick={forwardPageNoByOne}>&raquo;</button>
            </div>
        </React.Fragment>
    )
}

export default Pagination;
