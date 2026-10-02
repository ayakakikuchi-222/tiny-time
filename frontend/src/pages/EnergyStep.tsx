type Props = {
  onSelect: (value: string) => void
}

function EnergyStep({ onSelect }: Props) {
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
            <span className="step-count">2 / 3</span>

            <div className="progress-dots">
              <span className="dot completed"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
          </div>
        </header>

        <section className="question-section">
          <h2>How is your energy?</h2>

          <p className="question-subtitle">
            Choose the option that fits you best.
          </p>

          <div className="option-list location-list">
            <button
              className="option-card location-card"
              onClick={() => onSelect("low")}
            >
              <span className="option-icon location-icon">
                <img src="/images/energy-low.png" alt="low" />
              </span>
              <span>Low</span>
            </button>

            <button
              className="option-card location-card"
              onClick={() => onSelect("medium")}
            >
              <span className="option-icon location-icon">
                <img src="/images/energy-medium.png" alt="medium" />
              </span>
              <span>Medium</span>
            </button>

            <button
              className="option-card location-card"
              onClick={() => onSelect("high")}
            >
              <span className="option-icon location-icon">
                <img src="/images/energy-high.png" alt="high" />
              </span>
              <span>High</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default EnergyStep
