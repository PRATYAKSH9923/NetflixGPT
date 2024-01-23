import { useState } from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setId } from "../utils/slices/userInfo"
const Body = () => {
    const navigateto = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const showErrorFn = () => {
        if(!handleEmailChange(email)){
            setShowError(true)
        } else{
            dispatch(setId(email));
            navigateto("/Signup")
        }
    }
    const handleEmailChange = (e) => {
        const inputValue = e
        setEmail(inputValue);
        setShowError(false)
        // Perform email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputValue);
        return isValid;
      };
  return (
    <div className='justify-center items-center flex w-full h-full text-white flex-col'>
        <h3 className='text-5xl font-black pb-8'>Unlimited movies, TV shows and more</h3>
        <h6 className='text-2xl pb-4'>Watch anywhere. Cancel anytime.</h6>
        <div className='text-lg pb-2'>Ready to watch? Enter your email to create or restart your membership.</div>
        <div className='flex py-6 p-2 flex-col'>
            <span className='flex'>
                <input
                    onChange={(e)=>{handleEmailChange(e.target.value)}}
                    style={{ width: "20rem",height: "3rem" }}
                    type="text"
                    value={email}
                    className="mx-2 peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-10"
                    id="exampleFormControlInput1"
                    placeholder="E-mail" />    
           <button onClick={showErrorFn} style={{ whiteSpace: "nowrap", backgroundColor:"rgb(229,9,20)" }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started <FontAwesomeIcon icon={faAngleRight}  /></button>
           </span>
           { showError ? (<span className='text-red-400 px-2'>Please enter valid email address</span>) : null }
        </div>
    </div>
  )
}

export default Body