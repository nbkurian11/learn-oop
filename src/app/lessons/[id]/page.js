import lessons from "@/app/data/lessons"
import Link from "next/link"

export default async function LessonPage({ params }) {
  const { id } = await params
  const lesson = lessons[id]

  return (
    <main>
      <Link href="/modules" className = "btn-back">Back to Modules</Link>
      <h1>Lesson {id}: {lesson.title}</h1>
      <p>{lesson.content}</p>
      <pre><code>{lesson.code}</code></pre>
      
    </main>
  )
}

function goBack(){

}