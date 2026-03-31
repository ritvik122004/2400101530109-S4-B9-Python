import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function callfun(){
    alert("Function Call");
  }
  function Apple(){
    alert("You are click on apple button");
  }
  function Banana(){
    alert("You are click on banana button");
  }
  return (
    <>
      <h1>Welcome in new project</h1>
      <button onClick={callfun}>OK</button>
      <button onClick={Apple}>APPLE</button>
      <button onClick={Banana}>BANANA</button>
    </>
  )

}

export default App
