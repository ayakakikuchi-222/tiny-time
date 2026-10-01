import { useState } from 'react'
import LocationStep from './pages/LocationStep'
import './App.css'

function App() {
  /* const [count, setCount] = useState(0) */
  const [step, setStep] = useState(1)

  const [location, setLocation] = useState("")
  // const [energy, setEnergy] = useState("")
  // const [mood, setMood] = useState("")

  return (
    <>
      {step === 1 && <LocationStep />}
      {/* {step === 2 && <EnergyStep />} */}
      {/* {step === 3 && <MoodStep />} */}
    </>
  )
}

export default App
