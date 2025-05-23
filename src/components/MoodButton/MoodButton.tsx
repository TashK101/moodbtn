import { useState } from 'react'
import './MoodButton.css'
import { MoodRegistry } from '../MoodRegistry/MoodRegistry'

const moods = [
  { label: '😎 Chill', color: '#a2d2ff' },
  { label: '🤬 Angry', color: '#ffadad' },
  { label: '😭 Sad', color: '#d3d3d3' },
  { label: '🤖 Robot', color: '#caffbf' },
]

const luckyMood = { label: '🌈 Lucky', color: 'rainbow' }

function getDifferentMood(currentMood) {
  // 5% chance to get lucky mood
  if (Math.random() < 0.05) {
    return luckyMood
  }

  const filtered = moods.filter((m) => m.label !== currentMood.label)
  return filtered[Math.floor(Math.random() * filtered.length)]
}

export default function MoodButton() {
  const [mood, setMood] = useState(() => moods[Math.floor(Math.random() * moods.length)])
  const [history, setHistory] = useState([mood])

  function handleClick() {
    const newMood = getDifferentMood(mood)
    setMood(newMood)
    setHistory((prev) => [newMood, ...prev])
  }

  return (
    <div
  className={`mood-container ${mood.label === '🌈 Lucky' ? 'rainbow-bg' : ''}`}
  style={{ background: mood.label !== '🌈 Lucky' ? mood.color : undefined }}>
      <h1 className="mood-label">{mood.label}</h1>
      <button className="mood-button" onClick={handleClick}>
        Change Mood
      </button>
      <MoodRegistry history={history} />
    </div>
  )
}
