import Link from "next/link"

export default function Home(){
  return (
    <main className = "container">
      <section className="hero">
        <h1 className="hero-title">Learn Object Oriented Programming</h1>
        <p className="hero-subtitle">
          I wanted to create a learning platform that helped students learn the concepts of object oriented programming.
        </p>
        <Link className="btn-primary" href="/modules">Get Started</Link>
      </section>
    </main>
  )
}
