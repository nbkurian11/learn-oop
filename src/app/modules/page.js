import Link from "next/link"

export default function Modules() {
const modules = [
  {number: 1, name: "Classes and Objects"}
]
return (
        <main className = "container">
            <h1>Modules</h1>
            
                {modules.map((topic) => {
                    return (
                        <Link key={topic.number} href={`/lessons/${topic.number}`} className="module-card">
                            {topic.name}
                        </Link>
)
                })}
    
        </main>
    )
}