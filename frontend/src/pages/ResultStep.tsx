import { useEffect, useState } from 'react'

type Activity = {
  id: number
  name: string
}

type Props = {
  location: string
  energy: string
  goal: string
  onRestart: () => void
}

function ResultStep({ location, energy, goal, onRestart }: Props) {
  const [activity, setActivity] = useState<Activity | null>(null)
  const [error, setError] = useState("")

  // ページが表示されたときに、バックエンドへ問い合わせる
  useEffect(() => {
    const params = new URLSearchParams({ location, energy, goal })
    fetch(`http://localhost:8000/activity?${params}`)
      .then((res) => {
        if (!res.ok) throw new Error("No matching activity")
        return res.json()
      })
      .then((data) => setActivity(data))
      .catch((err) => setError(err.message))
    }, [location, energy, goal])

  return (
    <main>
      <h1>Tiny Time</h1>

      <section>
        <h2>Your choices</h2>

        <ul>
          <li>Location: {location}</li>
          <li>Energy: {energy}</li>
          <li>Goal: {goal}</li>
        </ul>

        {activity && <p>Your activity: {activity.name}</p>}
        {error && <p>{error}</p>}

        <button onClick={onRestart}>Start over</button>
      </section>
    </main>
  )
}

export default ResultStep
