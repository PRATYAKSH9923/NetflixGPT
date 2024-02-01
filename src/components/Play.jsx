// import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {Trailer, API_OPTIONS} from "../utils/constant"
import { Link } from "react-router-dom";

const Play = () => {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const[videoKey, setVideoKey] = useState(null);

  // Get specific query parameter
  var videoId = queryParams.get('videoId');
  let getId = async()=>{
    let data = await fetch(`${Trailer}${videoId}/videos`, API_OPTIONS);
    data= await data.json();
    data.results.map((data1)=>{
        if( data1.type === "Featurette"){
            setVideoKey(data1.key);
            return;
        }
    })
    if(videoKey === null){
        setVideoKey(data.results[0].key);
    }

  }
    useEffect(()=>{
        getId();
    },[])
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", videoId);
  return (
    videoKey === null ? (<div className=" h-screen w-screen text-6xl text-red flex justify-center items-center"><span className="loader"></span></div>):(
    <><Link to={"/browse"}><div className="rounded absolute bg-white p-2 m-2 px-4 cusrsor-pointer font-semibold">Back</div></Link>
    <div className=" w-screen h-screen p-10 bg-black">
              <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoKey}?loop=1&controls=1&autoplay=1&modestbranding=1&mute=1`}
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