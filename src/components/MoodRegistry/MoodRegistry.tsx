import './MoodRegistry.css'

type Mood = {
  label: string
  color: string
}

type MoodRegistryProps = {
  history: Mood[]
}

export function MoodRegistry({ history }: MoodRegistryProps) {
  return (
    <div className="mood-registry">
      <h2>Mood History</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry.label}</li>
        ))}
      </ul>
    </div>
  )
}
