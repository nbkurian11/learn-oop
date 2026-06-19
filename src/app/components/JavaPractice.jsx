"use client"

import { useEffect, useState } from "react"

export default function JavaPractice({ expectedOutput, hints, topicId, prompt, starterCode }) {
  const storageKey = `learnoop-practice-${topicId}`
  const [visibleHintCount, setVisibleHintCount] = useState(0)
  const [runResult, setRunResult] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [code, setCode] = useState(() => {
    if (typeof window === "undefined") {
      return starterCode
    }

    return window.localStorage.getItem(storageKey) || starterCode
  })

  useEffect(() => {
    window.localStorage.setItem(storageKey, code)
  }, [code, storageKey])

  async function runJavaCode() {
    setIsRunning(true)
    setRunResult(null)

    try {
      const response = await fetch("/api/run-java", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
      const result = await response.json()

      setRunResult(result)
    } catch (error) {
      setRunResult({
        status: "runner_unavailable",
        stderr: error instanceof Error ? error.message : "The Java runner is unavailable.",
        error: "Java execution needs the Next.js server. It will not run on static hosting like GitHub Pages.",
      })
    } finally {
      setIsRunning(false)
    }
  }

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
      <div className="editor-actions">
        <button className="btn-primary" disabled={isRunning} onClick={runJavaCode} type="button">
          {isRunning ? "Running..." : "Run Java"}
        </button>
      </div>

      {runResult && (
        <div className={`run-output ${runResult.status === "success" ? "success" : "error"}`}>
          <div className="run-output-header">
            <h3>Output</h3>
            <span>{runResult.status?.replaceAll("_", " ")}</span>
          </div>
          {runResult.stdout && <pre>{runResult.stdout}</pre>}
          {runResult.stderr && <pre>{runResult.stderr}</pre>}
          {runResult.error && <pre>{runResult.error}</pre>}
        </div>
      )}

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
        This editor saves your practice code in this browser. Java execution runs through the Next.js server and needs Java installed on the host.
      </p>
    </section>
  )
}
