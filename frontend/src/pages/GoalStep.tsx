type Props = {
  onSelect: (value: string) => void
}

function GoalStep({ onSelect }: Props) {
  const goals = ["relax", "productive", "learn", "refresh", "I don't know"]
  return (
    <main>
      <h1>Tiny Time</h1>

      <section>
        <p>3 / 3</p>

        <h2>What is your goal?</h2>

      {goals.map((g) => (
        <button key={g} onClick={() => onSelect(g)}>{g}</button>
      ))}
      </section>
    </main>
  )
}

export default GoalStep
