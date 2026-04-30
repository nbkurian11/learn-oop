import lessons from "@/app/data/lessons"

export default async function LessonPage({ params }) {
  const { id } = await params
  const lesson = lessons[id]

  return (
    <main>
      <h1>Lesson {id}: {lesson.title}</h1>
      <p>{lesson.content}</p>
      <pre><code>{lesson.code}</code></pre>
    </main>
  )
}