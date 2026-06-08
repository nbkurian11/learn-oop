import fs from "fs"
import path from "path"

const topicsDirectory = path.join(process.cwd(), "src", "content", "topics")

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return { metadata: {}, body: source }
  }

  const metadata = {}

  match[1].split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":")

    if (separatorIndex === -1) {
      return
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()
    metadata[key] = key === "id" ? Number(value) : value
  })

  return { metadata, body: match[2].trim() }
}

function getSection(body, heading) {
  const pattern = new RegExp(`## ${heading}\\n([\\s\\S]*?)(?=\\n## |$)`)
  const match = body.match(pattern)
  return match ? match[1].trim() : ""
}

function parseQuiz(quizSource) {
  return quizSource
    .split(/\n(?=\d+\. )/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean)
      const question = lines[0].replace(/^\d+\.\s*/, "")
      const options = lines
        .filter((line) => /^- [A-D]\)/.test(line))
        .map((line) => ({
          key: line.match(/^- ([A-D])\)/)?.[1],
          text: line.replace(/^- [A-D]\)\s*/, ""),
        }))
      const answer = lines.find((line) => line.startsWith("Answer:"))?.replace("Answer:", "").trim()
      const explanation = lines
        .find((line) => line.startsWith("Explanation:"))
        ?.replace("Explanation:", "")
        .trim()

      return { question, options, answer, explanation }
    })
}

function parsePractice(practiceSource) {
  const codeMatch = practiceSource.match(/```java\n([\s\S]*?)\n```/)
  const prompt = practiceSource.replace(/```java\n[\s\S]*?\n```/, "").trim()

  return {
    prompt,
    starterCode: codeMatch ? codeMatch[1].trim() : "",
  }
}

function parseList(source) {
  return source
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, ""))
}

function parseExpectedOutput(source) {
  const codeMatch = source.match(/```text\n([\s\S]*?)\n```/)
  return codeMatch ? codeMatch[1].trim() : source.trim()
}

export function getAllTopics() {
  return fs
    .readdirSync(topicsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => getTopicBySlug(fileName.replace(/\.md$/, "")))
    .sort((a, b) => a.id - b.id)
}

export function getTopicById(id) {
  return getAllTopics().find((topic) => String(topic.id) === String(id))
}

export function getTopicBySlug(slug) {
  const fullPath = path.join(topicsDirectory, `${slug}.md`)
  const source = fs.readFileSync(fullPath, "utf8")
  const { metadata, body } = parseFrontmatter(source)
  const concept = getSection(body, "Concept")
  const commonMistakes = parseList(getSection(body, "Common Mistakes"))
  const quiz = parseQuiz(getSection(body, "Quiz"))
  const practice = parsePractice(getSection(body, "Practice"))
  const hints = parseList(getSection(body, "Hints"))
  const expectedOutput = parseExpectedOutput(getSection(body, "Expected Output"))

  return {
    ...metadata,
    concept,
    commonMistakes,
    quiz,
    practice,
    hints,
    expectedOutput,
  }
}
