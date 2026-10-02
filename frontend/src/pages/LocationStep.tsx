type Props = {
  onSelect: (value: string) => void
}

function LocationStep({ onSelect }: Props) {
  return (
    <main>
      <h1>Tiny Time</h1>

      <section>
        <p>1 / 3</p>

        <h2>Where are you?</h2>

        <button onClick={() => onSelect("home")}>Home</button>
        <button onClick={() => onSelect("outside")}>Outside</button>
        <button onClick={() => onSelect("work")}>Work</button>
      </section>
    </main>
  )
}

export default LocationStep
