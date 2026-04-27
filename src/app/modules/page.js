export default function Modules() {
const modules = [
  "Classes and Objects",
  "Constructors and the this Keyword",
  "Encapsulation",
  "Static Methods and Variables",
  "Inheritance",
  "Method Overriding and Polymorphism",
  "Abstract Classes",
  "Interfaces",
  "Exception Handling",
  "Recursion",
  "Searching and Sorting",
  "Stacks and Queues",
  "Linked Lists",
  "Binary Trees",
  "Big-O Notation",
]
return (
        <main className = "container">
            <h1>Modules</h1>
            <ul>
                {modules.map((topic) => {
                    return <li key={topic}>{topic}</li>
                })}
            </ul>
        </main>
    )
}