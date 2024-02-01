// import React from 'react'
import Head from "./head"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSetVideosData } from "../customHook/useSetVideosData";
import useSetTrailer from '../customHook/useSetTrailer'
import background from "../assets/background.jpeg"
import GptBrowse from "./GptBrowse";
import MovieTrailer from "./custom/MovieTrailer"
import MovieListing from "./custom/MovieListing";
import { useState } from "react";

const Browser = () => {
  useSetVideosData();
  useSetTrailer();
  const [Gpt, SetGpt] = useState(false)
  const navigateTo = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("tkId")){
            navigateTo("/signin")
        }
    },[])
  return (
    Gpt?(<div>
      <div style={{height:"100%", width:"100%"}} className='browes-body flex flex-col bg-black'>
      <div className='w-screen h-screen main-container '>
        <img className='w-full h-full absolute opacity-50' src={background} />
        <GptBrowse SetGpt={SetGpt} Gpt={Gpt} />
      </div>
    </div>
    </div>):(
    <div style={{height:"100%", width:"100%"}} className='browes-body flex flex-col bg-black'>
      <div className='w-full h-full z-10 main-container '>
          <MovieTrailer/>
          <div className="absolute w-full h-full">
            <div style={{height:"15%"}} className='w-full flex'>
              <Head state={"logout"} Gpt={Gpt} SetGpt={SetGpt}  />
            </div>
            <div style={{height:"70%"}} className='w-full flex'></div>
            <div className='w-full bg-black'>
              <MovieListing/>
            </div>
          </div>
      </div>
    </div>)

    )
}

export default Browser