import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "LearnOOP",
  description: "Learn Object Oriented Programming in Java",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="logo">LearnOOP</Link>
          <Link href="/modules">Modules</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}