// import { useState } from 'react'
import Wrapper from "./components/Wrapper"
import { Provider } from 'react-redux';
import store from "./utils/store"
import './App.css'


function App() {

  return (
    <Provider store={store} >
      <Wrapper />
    </Provider>
  )
}

export default App
