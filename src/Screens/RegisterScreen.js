import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {signin,register} from '../actions/userActions';


function RegisterScreen(props){
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');  
    const [email,setEmail]=useState('');
    const [repassword,setRePassword]=useState('');
    const userRegister=useSelector(state=>state.userSignin);
    const {loading,userInfo,error}=userRegister;
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';

const dispatch =useDispatch();
useEffect(()=>{
    if(userInfo)
{
    props.history.push(redirect);    
}    
return()=>{
    //
}

},[userInfo]);
const submitHandler=(e)=>{
 e.preventDefault();
dispatch(register(name,email,password));

}


    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li><h2>Create An Account</h2></li>
                <li className="">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="name" name="name" id="name" onChange={(e)=>setName(e.target.value)} />
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
                <li className="">
                    <label htmlFor="rePassword">
                        Re-Enter Password
                    </label>
                    <input type="rePassword" name="rePassword" id="rePassword" onChange={(e)=>setRePassword(e.target.value)} />
                </li>
              
                <li>
                    <button className="button primary" type="submit">Register</button>
                </li>
                <li>
                <Link to={redirect==='/'?"/signin":"/signin?redirect="+redirect} >Sign-In</Link>
                   Already have an account? 
                </li>
              
            </ul>

        </form>

    </div>
}
export default RegisterScreen;