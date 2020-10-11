import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import CartScreen from './Screens/CartScreen';
import SignInScreen from './Screens/SignInScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsAddScreen from './Screens/ProductsAddScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';

function App() {
  const secret=process.env.secret;
  const userSignin=useSelector(state=>state.userSignin);
  const {userInfo}=userSignin;

  const [isAdmin, setIsAdmin] = useState(true) ;
  
      useEffect(() => {
        //   const fetchData = async () => {
        //       const data = await getDataFromServer();
        //        setMyAwesomeData(data);
        //   };
        // if(userInfo.isAdmin){
        //     setIsAdmin(true);
        // }
        return ()=>{
//
        }
      }, []);
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");

  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
    
  }
  return (
    <BrowserRouter>
<div className="grid-container">
    <header className="header">
       <div className="brand"> 
           <button className="brand-button" onClick={openMenu}>
               &#9776;    </button>
               <a href="/">amazona</a>
       </div> 
       <div className="header-links"> 
       <Link to="/cart" style={{marginRight:"1rem"}}>Cart</Link>
{userInfo ?<Link  style={{marginRight:"1rem"}} to="/profile">{userInfo.name}</Link>:<Link style={{marginRight:"1rem"}} to="/signin">SignIn</Link> }
{isAdmin ? <Link to="/products/">Admin-Panal</Link>:""}

    </div> 
    </header>
    <aside className="sidebar">
      <div className="sidebar-top">
<h3>
Hello Sign In User
  </h3>
      </div>
        <h3>
            Shopping Catogories
        </h3>
        <button className="sidebar-close-botton" onClick={closeMenu}>x</button>
        <ul>
            <li>
               <a href={'/home'+'?shirts=tshirt'}>Shirts</a> 
            </li>
            <li>
            <a href={'/home'+'?paints=pant'}>Paints</a> 

            </li>
        </ul>

    </aside>
    <main className="main">
        <div className="content">
         <Switch>
           <Route path="/" exact component={HomeScreen} />
           <Route path="/home" exact component={HomeScreen} />
           <Route path="/product/:id" exact component={ProductScreen} />
          <Route path="/cart/:id?" exact component={CartScreen} />
          <Route path="/signin" exact component={SignInScreen} />
          <Route path="/register"  component={RegisterScreen} />
          <Route path="/products" exact component={ProductsAddScreen} />
          <Route path="/shipping" exact component={ShippingScreen} />
          <Route path="/payment" exact component={PaymentScreen} />
          <Route path="/placeorder" exact component={PlaceOrderScreen} />
          </Switch>
       
        </div>
       
    </main>
    <footer className="footer">
        All rights reserved!
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
