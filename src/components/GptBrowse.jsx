/* eslint-disable react/prop-types */
// import React from 'react'
import { useRef } from "react";
import openai from "../utils/openai";
import Head from "./head"

const GptBrowse = (props) => {
  var searchText = useRef();
  var handleGptSearch = async()=>{
      const MoviesByGpt = await openai.chat.completions.create({
        messages: [{ role: 'user', content: searchText.current.value }],
        model: 'gpt-3.5-turbo',
      });
  
      console.log("MoviesByGpt", MoviesByGpt);
  }
  return (
    <div className="absolute z-10 w-full">
        <Head state={"logout"} Gpt={props.Gpt} SetGpt={props.SetGpt}  />
        <div style={{height: "86vh"}}  className="flex items-center justify-center">
          <div>
            <div className="flex">
              <input ref={searchText} autoFocus className="w-30 rounded-md w-80 px-3 font-medium" type="text "></input>
              <button onClick={handleGptSearch} className="btn mx-4 p-2 px-4 rounded bg-red-800 hover:bg-red-400 font-bold">Search</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GptBrowse