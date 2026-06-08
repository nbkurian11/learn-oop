import JavaPractice from "@/app/components/JavaPractice"
import LessonCompletion from "@/app/components/LessonCompletion"
import Quiz from "@/app/components/Quiz"
import { getAllTopics, getTopicById } from "@/app/lib/topics"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return getAllTopics().map((topic) => ({
    id: String(topic.id),
  }))
}

export default async function LessonPage({ params }) {
  const { id } = await params
  const topics = getAllTopics()
  const topic = getTopicById(id)

  if (!topic) {
    notFound()
  }

  const currentIndex = topics.findIndex((currentTopic) => currentTopic.id === topic.id)
  const previousTopic = topics[currentIndex - 1]
  const nextTopic = topics[currentIndex + 1]
  const conceptParagraphs = topic.concept.split("\n").filter(Boolean)
  
  return (
    <main className="container lesson-page">
      <Link href="/modules" className="btn-back">Back to Modules</Link>

      <section className="lesson-hero">
        <span className="lesson-kicker">Lesson {topic.id} of {topics.length}</span>
        <h1>{topic.title}</h1>
      </section>

      <section className="lesson-section">
        <h2>Concept</h2>
        {conceptParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      {topic.commonMistakes.length > 0 && (
        <section className="lesson-section">
          <h2>Common Mistakes</h2>
          <ul className="mistake-list">
            {topic.commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </section>
      )}

      <Quiz questions={topic.quiz} topicId={topic.id} />
      <JavaPractice
        expectedOutput={topic.expectedOutput}
        hints={topic.hints}
        prompt={topic.practice.prompt}
        starterCode={topic.practice.starterCode}
        topicId={topic.id}
      />
      <LessonCompletion title={topic.title} topicId={topic.id} />

      <nav className="lesson-nav" aria-label="Lesson navigation">
        {previousTopic ? (
          <Link href={`/lessons/${previousTopic.id}`} className="lesson-nav-link">
            <span>Previous</span>
            {previousTopic.title}
          </Link>
        ) : (
          <span />
        )}
        {nextTopic && (
          <Link href={`/lessons/${nextTopic.id}`} className="lesson-nav-link next">
            <span>Next</span>
            {nextTopic.title}
          </Link>
        )}
      </nav>
    </main>
  )
}
