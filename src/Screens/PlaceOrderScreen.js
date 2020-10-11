import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {addToCart, removeFromCart} from '../actions/cartActions';
import CheckoutSteps from '../component/CheckoutSteps';

function PlaceOrderScreen(props){
    const  cart=useSelector(state=>state.cart);
    const {cartItems,shipping,payment}=cart;
    if(!shipping.address){
props.history.push("/shipping");
    }else if(!payment.paymentMethod){
        props.history.push("/payment");

    }
  const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
  const shippingPrice=itemsPrice>100?0:10;
  const taxPrice=itemsPrice*.15;
  const totalPrice=itemsPrice+shippingPrice+taxPrice;
    const qty=props.location.search ? Number(props.location.search.split("=")[1]):1;
    const dispatch=useDispatch();
  
  const placeOrderHandler=()=>{

  }
    const checkoutHandler=()=>{
        props.history.push("/signin?redirect=shipping");
    }
    return <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="placeorder">
        <div className="placeorder-info">
            <div>
                <h3>
                    Shipping
                </h3>
            
            <div>
{cart.shipping.address},{cart.shipping.city},{cart.shipping.postalcode},{cart.shipping.country},
            </div>
            </div>
            <div>
                <h3>Payments</h3>
                <div>
                    Payment Method :{cart.payment.paymentMethod}
                </div>
            </div>
            <div>
            <ul className="cart-list-container">
                 <li>
        <h3>Place Order</h3>
            </li>
         <li>
        <div className="cart-price">Price</div>
         </li>
       
     
        {
            cartItems.length === 0 ? 
            <div>
                Cart Is Empty
            </div>
            :
            cartItems.map(item=>
            <li key={item.product}>
                <div className="cart-image">
                <img src={item.image} alt="cartImage" ></img>

                </div>
                <div className="cart-name">
                        <div>
                           <Link to={'/products/' +item.product}>
                           {item.name}

                           </Link>
                        </div>
                            <div>
                                Qty:{item.qty}
                            </div>
                        <div className="cart-price">
                           $ {item.price}
                        </div>
                                </div>
                </li>            
        )
        }
 
        </ul> 
            </div>
          
   </div>
   <div className="placeorder-action">
       <ul>
           <li>
               <button className="button full-width" onClick={placeOrderHandler}>Place Order</button>
           </li>
           <li>
<h3>Order Summary</h3>           </li>
<li>
    <div>
        Items
    </div>
    <div>
        ${itemsPrice}
    </div>
</li>
<li>
    <div>
        Shipping
    </div>
    <div>
        ${shippingPrice}
    </div>
</li>
<li>
    <div>
        Tax
    </div>
    <div>
        ${taxPrice}
    </div>
</li>
<li>
    <div>
        Total
    </div>
    <div>
        ${totalPrice}
    </div>
</li>
       </ul>

   </div>
    </div>
    </div>   

}
export default PlaceOrderScreen;