"use client"

import { useEffect, useState } from "react"

export default function JavaPractice({ expectedOutput, hints, topicId, prompt, starterCode }) {
  const storageKey = `learnoop-practice-${topicId}`
  const [visibleHintCount, setVisibleHintCount] = useState(0)
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

      {expectedOutput && (
        <div className="expected-output">
          <h3>Expected Output</h3>
          <pre>{expectedOutput}</pre>
        </div>
      )}

      <textarea
        aria-label="Java practice editor"
        className="code-editor"
        onChange={(event) => setCode(event.target.value)}
        spellCheck="false"
        value={code}
      />

      {hints.length > 0 && (
        <div className="hint-panel">
          <div className="hint-actions">
            <h3>Hints</h3>
            <button
              className="btn-secondary"
              disabled={visibleHintCount >= hints.length}
              onClick={() => setVisibleHintCount((count) => Math.min(count + 1, hints.length))}
              type="button"
            >
              Show hint
            </button>
          </div>
          {visibleHintCount > 0 && (
            <ol>
              {hints.slice(0, visibleHintCount).map((hint) => (
                <li key={hint}>{hint}</li>
              ))}
            </ol>
          )}
        </div>
      )}

      <p className="editor-note">
        This editor saves your practice code in this browser. Java execution can be added later with a backend runner.
      </p>
    </section>
  )
}
