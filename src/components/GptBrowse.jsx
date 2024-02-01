/* eslint-disable react/prop-types */
// import React from 'react'
import Head from "./head"

const GptBrowse = (props) => {
  return (
    <div className="absolute z-10 w-full">
        <Head state={"logout"} Gpt={props.Gpt} SetGpt={props.SetGpt}  />
        <div style={{height: "86vh"}}  className="flex items-center justify-center">
          <div>
            <div className="flex">
              <input autoFocus className="w-30 rounded-md w-80 px-3 font-medium" type="text "></input>
              <button className="btn mx-4 p-2 px-4 rounded bg-red-800 hover:bg-red-400 font-bold">Search</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GptBrowse