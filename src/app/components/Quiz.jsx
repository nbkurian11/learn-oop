"use client"

import { useState } from "react"

export default function Quiz({ questions }) {
  const [selectedAnswers, setSelectedAnswers] = useState({})

  return (
    <section className="lesson-section">
      <h2>Quick Check</h2>
      <div className="quiz-list">
        {questions.map((question, index) => {
          const selected = selectedAnswers[index]
          const isAnswered = Boolean(selected)
          const isCorrect = selected === question.answer

          return (
            <article className="quiz-card" key={question.question}>
              <h3>{question.question}</h3>
              <div className="quiz-options">
                {question.options.map((option) => (
                  <button
                    className={`quiz-option ${selected === option.key ? "selected" : ""}`}
                    key={option.key}
                    onClick={() =>
                      setSelectedAnswers((current) => ({
                        ...current,
                        [index]: option.key,
                      }))
                    }
                    type="button"
                  >
                    <span>{option.key}</span>
                    {option.text}
                  </button>
                ))}
              </div>
              {isAnswered && (
                <p className={isCorrect ? "quiz-feedback correct" : "quiz-feedback incorrect"}>
                  {isCorrect ? "Correct. " : `Not quite. The answer is ${question.answer}. `}
                  {question.explanation}
                </p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
