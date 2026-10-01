import { useState } from 'react'
import LocationStep from './pages/LocationStep'
import EnergyStep from './pages/EnergyStep'
import GoalStep from './pages/GoalStep'
import './App.css'

function App() {
  /* const [count, setCount] = useState(0) */
  const [step, setStep] = useState(1)

  const [location, setLocation] = useState("")
  const [energy, setEnergy] = useState("")
  const [goal, setGoal] = useState("")

  const handleLocation = (value: string) => {
    setLocation(value)
    setStep(2)
  }

  const handleEnergy = (value: string) => {
    setEnergy(value)
    setStep(3)
  }

  const handleGoal = (value: string) => {
    setGoal(value)
    setStep(4)
  }

  return (
    <>
    {/* App から各ページに「選択されたときに呼ぶ関数」を props として渡します（例: onSelect） */}
      {step === 1 && <LocationStep onSelect={handleLocation} />}
      {step === 2 && <EnergyStep onSelect={handleEnergy} />}
      {step === 3 && <GoalStep onSelect={handleGoal} />}
    </>
  )
}

export default App
