import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {saveShipping} from '../actions/cartActions';
import CheckoutSteps from '../component/CheckoutSteps';



function ShippingScreen(props){
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');  
    const [country,setCountry]=useState('');
    const [postalcode,setPostalcode]=useState('');
 

const dispatch =useDispatch();

const submitHandler=(e)=>{
 e.preventDefault();
dispatch(saveShipping({address,city,country,postalcode}));
props.history.push("/payment");
}


    return <div>
<CheckoutSteps step1 step2></CheckoutSteps>
    <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li><h2>Shipping</h2></li>
                <li className="">
                    <label htmlFor="address">
                        Address
                    </label>
                    <input type="text" name="address" id="address" onChange={(e)=>setAddress(e.target.value)} />
                </li>
                <li className="">
                    <label htmlFor="city">
                        City
                    </label>
                    <input type="text" name="city" id="city" onChange={(e)=>setCity(e.target.value)} />
                </li>
                <li className="">
                    <label htmlFor="country">
                        Country
                    </label>
                    <input type="text" name="country" id="country" onChange={(e)=>setCountry(e.target.value)} />
                </li>
                <li className="">
                    <label htmlFor="postalcode">
                       Postal Code
                    </label>
                    <input type="text" name="postalcode" id="postalcode" onChange={(e)=>setPostalcode(e.target.value)} />
                </li>
              
                <li>
                    <button className="button primary" type="submit">Continue</button>
                </li>
               
              
            </ul>

        </form>
        </div>

    </div>
}
export default ShippingScreen;