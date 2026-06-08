"use client"

import { useState } from "react"

export default function Quiz({ questions, topicId }) {
  const storageKey = `learnoop-quiz-${topicId}`
  const [selectedAnswers, setSelectedAnswers] = useState(() => {
    if (typeof window === "undefined") {
      return {}
    }

    const savedAnswers = window.localStorage.getItem(storageKey)
    return savedAnswers ? JSON.parse(savedAnswers) : {}
  })

  const answeredCount = Object.keys(selectedAnswers).length
  const correctCount = questions.filter((question, index) => selectedAnswers[index] === question.answer).length

  function selectAnswer(index, answer) {
    setSelectedAnswers((current) => {
      const updatedAnswers = {
        ...current,
        [index]: answer,
      }

      window.localStorage.setItem(storageKey, JSON.stringify(updatedAnswers))
      return updatedAnswers
    })
  }

  function resetQuiz() {
    setSelectedAnswers({})
    window.localStorage.removeItem(storageKey)
  }

  return (
    <section className="lesson-section">
      <div className="section-heading-row">
        <div>
          <h2>Quick Check</h2>
          <p className="section-subtitle">Answer each question to check whether the concept is sticking.</p>
        </div>
        <span className="quiz-score">
          {correctCount}/{questions.length} correct
        </span>
      </div>
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
                    onClick={() => selectAnswer(index, option.key)}
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
      {answeredCount === questions.length && (
        <div className="quiz-summary">
          <strong>Score: {correctCount}/{questions.length}</strong>
          <span>{correctCount === questions.length ? "Nice work. You are ready to practice." : "Review the feedback, then try again."}</span>
          <button className="btn-secondary" onClick={resetQuiz} type="button">Reset quiz</button>
        </div>
      )}
    </section>
  )
}
