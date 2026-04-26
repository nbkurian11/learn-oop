export default function Home(){
  return (
    <main className = "container">
      <nav className = "navbar">
        <span className = "logo">Learn OOP</span>
        <button className="btn-primary">Sign Up</button>
      </nav>

      <section className="hero">
        <h1 className="hero-title">Learn Object Oriented Programming</h1>
        <p className="hero-subtitle">
          When I took OOP in Univeristy, I struggled to master concepts, it took time but after practice I was able
          to gain success. This is a platform that I hope helps others master the concepts that I struggled with. 
        </p>
        <button className="btn-primary">Get Started</button>
      </section>
    </main>
  )
}