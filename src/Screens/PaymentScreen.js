import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {savePayment} from '../actions/cartActions';
import CheckoutSteps from '../component/CheckoutSteps';



function PaymentScreen(props){
    const [paymentMethod,setPaymentMethod]=useState('');
 
 

const dispatch =useDispatch();

const submitHandler=(e)=>{
 e.preventDefault();
dispatch(savePayment({paymentMethod}));
props.history.push("/placeorder");
}


    return <div>
<CheckoutSteps step1 step2 step3></CheckoutSteps>
    <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li><h2>Payment</h2></li>
                <li className="">
                    <div>

                <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e)=>setPaymentMethod(e.target.value)} />

                    <label htmlFor="paymentMethod">
                        Paypal
                    </label>
                    </div>

                </li>
             
                <li>
                    <button className="button primary" type="submit">Place Order</button>
                </li>
               
              
            </ul>

        </form>
        </div>

    </div>
}
export default PaymentScreen;