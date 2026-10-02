import { useState } from 'react'
import LocationStep from './pages/LocationStep'
import EnergyStep from './pages/EnergyStep'
import GoalStep from './pages/GoalStep'
import ResultStep from './pages/ResultStep'
import './App.css'

function App() {
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

  const handleRestart = () => {
    setLocation("")
    setEnergy("")
    setGoal("")
    setStep(1)
  }

  return (
    <>
    {/* App から各ページに「選択されたときに呼ぶ関数」を props として渡します（例: onSelect） */}
      {step === 1 && <LocationStep onSelect={handleLocation} />}
      {step === 2 && <EnergyStep onSelect={handleEnergy} />}
      {step === 3 && <GoalStep onSelect={handleGoal} />}
      {step === 4 && (
        <ResultStep
          location={location}
          energy={energy}
          goal={goal}
          onRestart={handleRestart}
        />
      )}
    </>
  )
}

export default App
