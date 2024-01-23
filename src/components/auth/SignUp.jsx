/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { Auth} from "../../utils/firebase";
// import { useState } from "react";
import { useFormik } from 'formik';
import { useEffect, useState } from "react";

const SignUp = () => {
    const navigateTo = useNavigate();
    useEffect(()=>{
        if( localStorage.getItem("tkId")){
            navigateTo("/browse")
        }
    },[])
    var emailid = useSelector((store=>{ return store.userinfo.emailid}));
    const [ loader , setLoader] = useState(false);
    const validate = values => {
        if (!values.username) {
          errors.username = 'Required';
        } else if (values.username.length > 15) {
          errors.username = 'Must be 15 characters or less';
        }
      
        if (!values.password) {
            errors.password = 'Required';
        } else if (/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(values.password)) {
          errors.password = 'Password must contain1 uppercase letter, lowercase letter, special character, 1 number, 8 characters, 30 characters';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      };
    const formik = useFormik({
        initialValues: {
            username: "",
            email: emailid,
            password: ""
        },
        validate,
        onSubmit: values => {
            setLoader(true);
            SignUpWithInfo(values);

        },
      });
    const errors = {};
    const SignUpWithInfo = values=>{
        createUserWithEmailAndPassword(Auth, values.email, values.password)
        .then((userCredential) => {
            console.log(userCredential);
            setLoader(false);
            navigateTo("/Signin")
        })
        .catch((error) => {
            if(error.code === "auth/email-already-in-use"){
                errors.email = 'Email Id Exist';
            }
        });
    }
    return (
    <div style={{height:"100vh", width:"100vw"}} >
        <div style={{height: "12%"}}>
            <div className="py-6 px-10 flex w-full border-b-gray-500 border">
                <span className="flex justify-start items-center flex-auto w-10 "><svg viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlik="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="default-ltr-cache-1d568uk ev1dnif2"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg></span>
                <span className="flex justify-start items-center flex-auto w-70 "></span>
                <span className="flex justify-end items-center flex-auto w-20">
                    <Link to="/Signin"><h3 className="text-black font-bold text-xl">Sign In</h3></Link>
                </span>
            </div>
        </div>
        <div style={{height: "88%"}} className="">
            <div className="h-full w-full flex justify-center items-center">
                <div style={{height:"88%", width:"32%"}} className="py-2 px-6 border rounded">
                    <form  enableReinitialize={true} onSubmit={formik.handleSubmit}>
                        <div className="text-black text-4xl px-3 py-4 font-bold">Sign Up</div>
                        <div className="py-4 flex justify-center items-center flex-col">
                            <input
                                style={{ height: "3rem" }}
                                type="text"
                                name="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                className="mx-2 peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary text-black"
                                id="exampleFormControlInput1"
                                placeholder="Username" 
                            />
                            {formik.errors.username ? <div className=" text-red-700 text-sm font-bold w-full">{formik.errors.username}</div> : null}
                        </div>
                        <div className="py-4 flex justify-center items-center flex-col">
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                style={{ height: "3rem" }}
                                name="email"
                                type="text"
                                className="mx-2 peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary "
                                id="exampleFormControlInput1"
                                placeholder="Email" 
                            />
                            {formik.errors.email ? <div className=" text-red-700 text-sm font-bold w-full">{formik.errors.email}</div> : null}
                        </div>
                        <div className="py-4 flex justify-center items-center flex-col">
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                style={{ height: "3rem" }}
                                name="password"
                                type="password"
                                className="mx-2 peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary "
                                id="exampleFormControlInput1"
                                placeholder="password" 
                            />
                            {formik.errors.password ? <div className=" text-red-700 text-sm font-bold w-full">{formik.errors.password}</div> : null}
                        </div>
                        <div className="py-4 flex justify-center items-center">
                            <button type="submit" style={{ whiteSpace: "nowrap", backgroundColor:"rgb(229,9,20)",width: "100%" }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{loader ? (<span class="loader"></span>):("Sign Up")}</button>
                        </div>
                    </form>    
                </div> 
            </div>
        </div>
    </div>
  )
}

export default SignUp