import React, { useEffect, useState } from 'react';
// import data from '../data';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {listProducts} from '../actions/productActions';


function HomeScreen(props){
  const productList = useSelector(state=>state.productList);
  const {loading,products,error}=productList;
  const dispatch=useDispatch();
  const add=props.location.search ? (props.location.search.split("=")[1]):'';
console.log(add);
  useEffect(()=>{
    if(add==''){
      dispatch(listProducts("all"));

    }else{
      dispatch(listProducts(''+add));

    }
    return()=>{
//
    };
  },[])

    return (
      loading ? <div>Loading</div>:
      error ? <div>{error}</div>:
     <ul className="products">
    {
        products.map(product =>
        <li key={product._id}>
        <div className="product">
        <Link to={'/product/'+product._id}>
            <img className="product-image" src={product.image} alt="product" /></Link>
            <div className="product-name"> <Link to={'/product/'+product._id} >{product.name}</Link></div>
            <div className="product-brand"> {product.brand}</div>
            <div className="product-price"> $ {product.price}</div>
            <div className="product-rating"> {product.rating} stars ({product.numReviews} reviews)</div>

        </div> 
      </li>
        
    )}  
  </ul>
    )
    
}
export default HomeScreen;