// import React from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom"
import { setuserInfo } from "../../utils/slices/user"
import { useState, useEffect } from "react";
const SignIn = () => {
    
    var dispatch = useDispatch();
    const navigateto= useNavigate();
    const [ loader , setLoader] = useState(false);
    const [ showerror , setShowerror] = useState(false);
    const [ errorMessage , setErrorMessage] = useState("Required");
    var showError = message =>{
        setShowerror(true);
        setErrorMessage(message);
    }
    var user = useSelector((store=>{ return store.user.user}));
    useEffect(()=>{
        if(user !== null){
            navigateto("/browse")
        }
    },[])
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const valiadteForm=()=>{
            // Regular expression for validating an Email
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(!emailRegex.test(email)){
                showError("Please enter Valid email");
                return false
            }
            return true;
    }
    var SigninToBrowsePage = ()=>{
        if(valiadteForm()){
            setLoader(true);
            signInWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
            setLoader(false);
            dispatch(setuserInfo(userCredential));
            localStorage.setItem("tkId", JSON.stringify(userCredential.user.accessToken));
            navigateto("/browse")
        })
        .catch((error) => {
            if(error.code === "auth/invalid-credential"){
                showError("Incorrect Username or Password");
            }else{
                showError(error.code);
            }
            setLoader(false);
        });

        }
    }
  return (
    <div className="h-full w-full flex justify-center items-center">
        <div style={{height:"88%", width:"32%", backgroundColor:"#00000061"}} className="p-12 border rounded">
            <div className="text-white text-4xl px-3 py-4  font-bold">Sign In</div>
            <div className="py-4 flex justify-center items-center">
                <input
                    autoComplete="off"
                    onChange={(e)=>{setEmail(e.target.value);}}
                    style={{ height: "3rem" }}
                    type="email"
                    name="signInEmail"
                    value={email}
                    className=" text-white mx-2 peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary "
                    id="exampleFormControlInput1"
                    placeholder="E-mail" 
                    required
                />
            </div>
            <div className="py-4 flex justify-center items-center">
                <input
                    autoComplete="off"
                    onChange={(e)=>{setpassword(e.target.value)}}
                    style={{ height: "3rem" }}
                    type="password"
                    name="signInPassword"
                    value={password}
                    className=" text-white mx-2 peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary "
                    id="exampleFormControlInput1"
                    placeholder="Password" 
                    required
                />
            </div>
            {showerror ? (<span className="px-2" style={{color:"rgb(229, 9, 20)"}}>{errorMessage}</span>):""}
            <div className="py-4 flex justify-center items-center">
                <button onClick={SigninToBrowsePage} style={{ whiteSpace: "nowrap", backgroundColor:"rgb(229,9,20)",width: "100%" }} className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">{loader ? (<span className="loader"></span>):("Sign In")}</button>   
            </div>
            <span className="text-white">New to Netflix? <Link to={"/"} className="cursor-pointer font-bold hover:underline">Sign up now.</Link></span>
            
        </div> 
    </div>
  )
}

export default SignIn