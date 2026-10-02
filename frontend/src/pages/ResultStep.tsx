import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsis,
  faLocationDot,
  faBolt,
  faBullseye,
  faRotateLeft,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'

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

function ResultStep({
  location,
  energy,
  goal,
  onRestart,
}: Props) {
  const [activity, setActivity] = useState<Activity | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const params = new URLSearchParams({
      location,
      energy,
      goal,
    })

    const delay = new Promise((resolve) =>
      setTimeout(resolve, 1500)
    )

    const request = fetch(
      `http://localhost:8000/activity?${params}`
    ).then((res) => {
      if (!res.ok) {
        throw new Error('No matching activity')
      }

      return res.json()
    })

    Promise.all([request, delay])
      .then(([data]) => setActivity(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [location, energy, goal])

  return (
    <main className="result-page">
      <div className="result-container">
        <header className="result-header">
          <div>
            <h1 className="logo">
              <img src="/images/tiny-time-logo.png" alt="Tiny Time" />
            </h1>
            <p className="tagline">
              Small time. A brighter you.
            </p>
          </div>

          <div className="result-complete">
            Done ✨
          </div>
        </header>

        <section className="result-content">
          <div className="result-title-area">
            <h2>Here's your Tiny Time</h2>
            <p>
              A small activity picked just for you.
            </p>
          </div>

          <div className="choice-summary">
            <div className="summary-item">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{location}</span>
            </div>

            <div className="summary-item">
              <FontAwesomeIcon icon={faBolt} />
              <span>{energy}</span>
            </div>

            <div className="summary-item">
              <FontAwesomeIcon icon={faBullseye} />
              <span>{goal}</span>
            </div>
          </div>

          <div className="activity-area">
            {loading && (
              <div className="activity-card loading-card">
                <div className="activity-icon">
                  <FontAwesomeIcon icon={faWandMagicSparkles} />
                </div>

                <p className="activity-eyebrow">
                  Finding your Tiny Time
                </p>

                <p className="loading-text">
                  Thinking
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    fade
                  />
                </p>
              </div>
            )}

            {activity && (
              <div className="activity-card">
                <div className="activity-icon">
                  <FontAwesomeIcon icon={faWandMagicSparkles} />
                </div>

                <p className="activity-eyebrow">
                  Your activity
                </p>

                <h3>{activity.name}</h3>

                <p className="activity-caption">
                  Just one small thing. That's enough.
                </p>
              </div>
            )}

            {error && (
              <div className="result-error">
                <p>{error}</p>
              </div>
            )}
          </div>

          {!loading && (
            <button
              className="restart-button"
              onClick={onRestart}
            >
              <FontAwesomeIcon icon={faRotateLeft} />
              Start over
            </button>
          )}
        </section>
      </div>
    </main>
  )
}

export default ResultStep
