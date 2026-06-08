"use client"

import { useState } from "react"

export default function LessonCompletion({ topicId, title }) {
  const storageKey = `learnoop-completed-${topicId}`
  const [isComplete, setIsComplete] = useState(() => {
    if (typeof window === "undefined") {
      return false
    }

    return window.localStorage.getItem(storageKey) === "true"
  })

  function toggleComplete() {
    const nextValue = !isComplete
    setIsComplete(nextValue)
    window.localStorage.setItem(storageKey, String(nextValue))
  }

  return (
    <section className={`completion-card ${isComplete ? "completed" : ""}`}>
      <div>
        <span className="lesson-kicker">{isComplete ? "Completed" : "Almost there"}</span>
        <h2>{isComplete ? `${title} is marked complete` : "Mark this lesson complete"}</h2>
        <p>
          {isComplete
            ? "Your progress is saved in this browser."
            : "Use this after reviewing the concept, finishing the quiz, and trying the Java practice."}
        </p>
      </div>
      <button className="btn-primary" onClick={toggleComplete} type="button">
        {isComplete ? "Mark incomplete" : "Complete lesson"}
      </button>
    </section>
  )
}
