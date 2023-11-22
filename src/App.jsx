import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4 rounded-xl">Tailwind test</h1>
      <Card username = "Anshika" bText="Tumhari" />
      <Card username="Ghar jaa" bText="Muh me lele" />
    </>
  )
}

export default App
