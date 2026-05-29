import Link from "next/link"
import { getAllTopics } from "@/app/lib/topics"

export default function Modules() {
  const topics = getAllTopics()

  return (
    <main className="container page-stack">
      <div>
        <h1>Modules</h1>
        <p className="page-intro">Work through the core OOP concepts in a practical Java-first order.</p>
      </div>

      <div className="module-grid">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/lessons/${topic.id}`} className="module-card">
            <span className="module-number">Lesson {topic.id}</span>
            <span>{topic.title}</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
