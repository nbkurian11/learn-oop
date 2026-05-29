"use client"

import { useEffect, useState } from "react"

export default function JavaPractice({ topicId, prompt, starterCode }) {
  const storageKey = `learnoop-practice-${topicId}`
  const [code, setCode] = useState(() => {
    if (typeof window === "undefined") {
      return starterCode
    }

    return window.localStorage.getItem(storageKey) || starterCode
  })

  useEffect(() => {
    window.localStorage.setItem(storageKey, code)
  }, [code, storageKey])

  return (
    <section className="lesson-section">
      <div className="practice-header">
        <div>
          <h2>Java Practice</h2>
          <p>{prompt}</p>
        </div>
        <button className="btn-secondary" onClick={() => setCode(starterCode)} type="button">
          Reset
        </button>
      </div>
      <textarea
        aria-label="Java practice editor"
        className="code-editor"
        onChange={(event) => setCode(event.target.value)}
        spellCheck="false"
        value={code}
      />
      <p className="editor-note">
        This editor saves your practice code in this browser. Java execution can be added later with a backend runner.
      </p>
    </section>
  )
}
