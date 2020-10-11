import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {signin,register} from '../actions/userActions';

function SignInScreen(props){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const userSignin=useSelector(state=>state.userSignin);
    const {loading,userInfo,error}=userSignin;
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';
const dispatch =useDispatch();
useEffect(()=>{
    if(userInfo){
        props.history.push(redirect);
    }
return()=>{
    //
}

},[userInfo])
const submitHandler=(e)=>{
e.preventDefault();
dispatch(signin(email,password));
}


    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading....</div>}
                    {error && <div>{error}</div>}
                </li>
                <li className="">
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
                                </li>
                                <li className="">
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                </li>
                <li>
                    <button className="button primary" type="submit">SignIn</button>
                </li>
                <li>
                    New to amazon?
                </li>
                <li>
                   <Link to={redirect==='/'?"register":"register?redirect="+redirect} className="button secondary text-center">Create An Account</Link>
                </li>
            </ul>

        </form>

    </div>
}
export default SignInScreen;