import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, saveProduct ,deleteProduct} from '../actions/productActions';

function ProductsAddScreen(props){
    const [modalVisible,setModalVisible]=useState(false);
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [image,setImage]=useState('');
    const [brand,setBrand]=useState('');
    const [category,setCategory]=useState('');
    const [description,setDescription]=useState('');
    const [countInStock,setCountinStock]=useState('');
    const [rating,setRating]=useState('');
    const [numReviews,setNumReviews]=useState('');
    
    const productList=useSelector(state=>state.productList);
    const {loading,products,error}=productList;

    const productSave=useSelector(state=>state.productSave);
    const {loading:loadingSave,success:successSave,error:errorSave}=productSave;

    const productDelete=useSelector(state=>state.productDelete);
    const {loading:loadingDelete,success:successDelete,error:errorDelete}=productDelete;

const dispatch =useDispatch();
useEffect(()=>{
    if(successSave){
        setModalVisible(false);
    }
   dispatch(listProducts());
return()=>{
    //
}

},[successSave,successDelete])
const openModel=(product)=>{
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setBrand(product.brand);
    setCategory(product.name);
    setCountinStock(product.countInStock);
    setDescription(product.description);
    setRating(product.rating);
    setPrice(product.price);
    setNumReviews(product.numReviews);
    setImage(product.image);
}
const submitHandler=(e)=>{
e.preventDefault();

dispatch(saveProduct({_id:id,name,price,category,rating,numReviews,description,image,countInStock,brand}));
}
const deleteHandler=(product)=>{
dispatch(deleteProduct(product._id));

}


    return  <div className="content content-margined">
          <div className="product-header">
            <h3>Products</h3>
            <button className="button primary" onClick={()=>openModel({})}>Create Product</button> 
            </div>
            {modalVisible ?  <div className="form">
                
                <form onSubmit={submitHandler} >
                    <ul className="form-container">
                  
                        <li>
                            <h2>Create Product</h2>
                        </li>
                        <li>
                            {loadingSave && <div>Loading....</div>}
                            {errorSave && <div>{errorSave}</div>}
                          
                        </li>
                        <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
                                        </li>
                                        <li>
                        <label htmlFor="price">
                            Price
                        </label>
                        <input type="text" name="price" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} />
                        </li>
                        <li>
                        <label htmlFor="category">
                        category
                        </label>
                        <input type="text" name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} />
                        </li>
                        <li>
                        <label htmlFor="brand">
                        brand
                        </label>
                        <input type="text" name="brand" id="brand" value={brand} onChange={(e)=>setBrand(e.target.value)} />
                        </li>
                        <li>
                        <label htmlFor="description">
                        description
                        </label>
                        <input type="text" name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
                        </li>
                        <li>
                        <label htmlFor="rating">
                            Rating
                        </label>
                        <input type="text" name="rating" id="rating" value={rating} onChange={(e)=>setRating(e.target.value)} />
                        </li>
                        <li>
                        <label htmlFor="numReviews">
                        numReviews
                        </label>
                        <input type="text" name="numReviews" id="numReviews" value={numReviews} onChange={(e)=>setNumReviews(e.target.value)} />
                        </li>
                        <li>
                        <label htmlFor="countInStock">
                        countInStock
                        </label>
                        <input type="text" name="countInStock" id="countInStock" value={countInStock} onChange={(e)=>setCountinStock(e.target.value)} />
                        </li>
                        <li>
                        <label htmlFor="image">
                        image
                        </label>
                        <input type="text" name="image" id="image" value={image} onChange={(e)=>setImage(e.target.value)} />
                        </li>
                        <li>
                            <button className="button primary" type="submit">{id?"Update":"Crete Product"}</button>
                            <button className="button secondary"  onClick={()=>{setModalVisible(false)}}>Back</button>
                        </li>
                     
                    </ul>
        
                </form>
        
            </div> :
           
<div className="product-list">
    <table className="table">
        <thead>
            <tr>
<th>ID</th>
<th>Name</th>
<th>Price</th>
<th>Category</th>
<th>Brand</th>
<th>Action</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product =>(
                <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                        <button className="button" style={{backgroundColor:"green",marginRight:"1rem"}} onClick={()=>openModel(product)}>Edit</button> 
                        <button className="button" style={{backgroundColor:"red",marginLeft:"1rem"}} onClick={()=>deleteHandler(product)}>Delete</button>
                        </td>
                </tr> 
            ))}
       
        </tbody>
    </table>
</div>
       
            }
    </div>
}
export default ProductsAddScreen;