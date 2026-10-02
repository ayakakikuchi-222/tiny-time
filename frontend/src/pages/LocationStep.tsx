type Props = {
  onSelect: (value: string) => void
}

function LocationStep({ onSelect }: Props) {
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
            <span className="step-count">1 / 3</span>

            <div className="progress-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </header>

        <section className="question-section">
          <h2>Where are you?</h2>

          <p className="question-subtitle">
            Choose the option that fits you best.
          </p>

          <div className="option-list location-list">
            <button
              className="option-card location-card"
              onClick={() => onSelect("home")}
            >
              <span className="option-icon location-icon">
                <img src="/images/location-home.png" alt="home" />
              </span>
              <span>Home</span>
            </button>

            <button
              className="option-card location-card"
              onClick={() => onSelect("work")}
            >
              <span className="option-icon location-icon">
                <img src="/images/location-work.png" alt="work" />
              </span>
              <span>Work</span>
            </button>

            <button
              className="option-card location-card"
              onClick={() => onSelect("outside")}
            >
              <span className="option-icon location-icon">
                <img src="/images/location-outside.png" alt="outside" />
              </span>
              <span>Outside</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default LocationStep
