import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  function callfun(){
    alert("Function Call");
  }

  const fruit=(name)=>
  {
  alert(name)
  }
  let data="Demo"
  function update()
  {
    data="Example"
    alert(data);
  }
  return (
    <>
      {/* <h1>example of Arrow Function</h1>
      <button onClick={callfun}>Click to call function</button>
      <button onClick={()=>fruit("First Parameter")}>Arrow Function</button>
      <button onClick={()=>fruit("Click on Apple")}>apple</button>
      <button onClick={()=>fruit("Click on Banana")}>banana</button>
       */}
      <h1>State in react</h1>
      <h1>{data}</h1>
      <button onClick={update}>CLick to change the value</button>
    </>
  )

}

export default App
