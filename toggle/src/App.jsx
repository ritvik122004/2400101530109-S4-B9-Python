import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [isOn, setisOn] = useState(false)
  function toggle(){
    setisOn(!isOn)
  }

  return (
    <>
    <h1>Toggle Button</h1>
      <h3>{isOn ? "Status On" : "Status Off"}</h3>
      <button onClick={toggle}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </>
  )
}

export default App
