import { useState } from 'react'
import AnimatedList from './blocks/Components/AnimatedList/AnimatedList.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimatedList/>
    </>
  )
}

export default App
