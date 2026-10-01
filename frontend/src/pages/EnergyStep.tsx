type Props = {
  onSelect: (value: string) => void
}

function EnergyStep({ onSelect }: Props) {
  return (
    <main>
      <h1>Tiny Time</h1>

      <section>
        <p>2 / 3</p>

        <h2>How is your energy?</h2>

        <button onClick={() => onSelect("low")}>Low</button>
        <button onClick={() => onSelect("medium")}>Medium</button>
        <button onClick={() => onSelect("high")}>High</button>
      </section>
    </main>
  )
}

export default EnergyStep
