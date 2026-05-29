import JavaPractice from "@/app/components/JavaPractice"
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
  const topic = getTopicById(id)

  if (!topic) {
    notFound()
  }

  const conceptParagraphs = topic.concept.split("\n").filter(Boolean)
  
  return (
    <main className="container lesson-page">
      <Link href="/modules" className="btn-back">Back to Modules</Link>

      <section className="lesson-hero">
        <span className="lesson-kicker">Lesson {topic.id}</span>
        <h1>{topic.title}</h1>
      </section>

      <section className="lesson-section">
        <h2>Concept</h2>
        {conceptParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <Quiz questions={topic.quiz} />
      <JavaPractice
        prompt={topic.practice.prompt}
        starterCode={topic.practice.starterCode}
        topicId={topic.id}
      />
    </main>
  )
}
