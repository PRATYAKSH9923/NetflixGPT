// import React from 'react'
import background from "../assets/background.jpeg"
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Head from "./head"
import { useEffect } from "react";

const MainContainer = () => {
  const navigateTo = useNavigate();
  useEffect(()=>{
      if( localStorage.getItem("tkId")){
          navigateTo("/browse")
      }
  },[])
  return (
    <div style={{height:"100vh", width:"100%"}} className='flex flex-col bg-sky-100'>
        <img className='w-full h-full absolute' src={background} />
        <div className='w-full h-full z-10 main-container'>
            <div style={{height:"15%"}} className='w-full flex'>
              <Head state={"logout"} />
            </div>
            <div style={{height:"85%"}} className='w-full'>
              <Outlet />
            </div>
        </div>
      </div>
  )
}

export default MainContainer