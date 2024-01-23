// import React from 'react'
import Head from "./head"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Browser = () => {
  const navigateTo = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("tkId")){
            navigateTo("/signin")
        }
    },[])
  return (
    <div style={{height:"100vh", width:"100vw"}} className='flex flex-col bg-sky-100'>
        <div className='w-full h-full z-10 main-container'>
            <div style={{height:"15%"}} className='w-full flex'>
              <Head state={"logout"} />
            </div>
            <div style={{height:"85%"}} className='w-full'>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Browser