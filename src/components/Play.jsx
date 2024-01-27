// import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {Trailer, API_OPTIONS} from "../utils/constant"
import { Link } from "react-router-dom";

const Play = () => {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const[videoKey, setVideoKey] = useState("null");

  // Get specific query parameter
  var videoId = queryParams.get('videoId');
  let getId = async()=>{
    let data = await fetch(`${Trailer}${videoId}/videos`, API_OPTIONS);
    data= await data.json();
    data.results.map((data)=>{
        if( data.type === "Featurette"){
            setVideoKey(data.key);
        }
    })
  }
    useEffect(()=>{
        getId();
    },[])
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", videoId);
  return (
    videoKey === null ? (<div className=" text-6xl text-red flex justify-center items-center"><span>Video Not Available</span></div>):(
    <><Link to={"/browse"}><div className="rounded-full absolute bg-white p-3 cusrsor-pointer font-semibold">Back</div></Link>
    <div className=" w-screen h-screen">
              <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoKey}?loop=1&controls=1&autoplay=1&modestbranding=1&start=5&mute=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullscreen
              >
              </iframe>
          </div></>)
  )
}

export default Play