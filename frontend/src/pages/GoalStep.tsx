type Props = {
  onSelect: (value: string) => void
}

function GoalStep({ onSelect }: Props) {
  const goals = [
    { value: "relax", label: "Relax", image: "goal-relax.png" },
    { value: "productive", label: "Be productive", image: "goal-productive.png" },
    { value: "learn", label: "Learn", image: "goal-learn.png" },
    { value: "refresh", label: "Refresh", image: "goal-refresh.png" },
    { value: "I don't know", label: "I don't know", image: "goal-idontknow.png" },
  ]

  return (
    <main className="app-shell">
      <div className="app-card">
        <header className="top-bar">
          <div>
            <h1 className="logo">
              <img src="/images/tiny-time-logo.png" alt="Tiny Time" />
            </h1>
            <p className="tagline">Small time. A brighter you.</p>
          </div>

          <div className="progress">
            <span className="step-count">3 / 3</span>

            <div className="progress-dots">
              <span className="dot completed"></span>
              <span className="dot completed"></span>
              <span className="dot active"></span>
            </div>
          </div>
        </header>

        <section className="question-section goal-section">
          <h2>What is your goal?</h2>

          <p className="question-subtitle">
            What would feel good right now?
          </p>

          <div className="option-list location-list">
            {goals.map((goal) => (
              <button
                key={goal.value}
                className="option-card location-card"
                onClick={() => onSelect(goal.value)}
              >
                <span className="option-icon location-icon">
                  <img src={`/images/${goal.image}`} alt={goal.label} />
                </span>
                <span>{goal.label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default GoalStep
