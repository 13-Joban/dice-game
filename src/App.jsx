import { useState } from 'react'
import './App.css'
import Intro from './components/Intro/Intro'
import GameStarted from './components/GameStarted/GameStarted'

function App() {
  const [isStart, setisStart] = useState(false)
  const toggleGame = () => {
    setisStart((prev) => !prev);
  }
  return (
    <>
    {
      isStart ?  <GameStarted /> : <Intro  toggle={toggleGame} />
    }
   
    </>
  )
}

export default App
