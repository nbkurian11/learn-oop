import { execFile } from "child_process"
import fs from "fs/promises"
import os from "os"
import path from "path"
import { promisify } from "util"

const execFileAsync = promisify(execFile)
const MAX_CODE_LENGTH = 20000
const RUN_TIMEOUT_MS = 5000

function getPublicClassName(code) {
  const match = code.match(/public\s+class\s+([A-Za-z_$][A-Za-z0-9_$]*)/)
  return match ? match[1] : "Main"
}

function normalizeOutput(error, stdout, stderr) {
  return {
    stdout: stdout || "",
    stderr: stderr || error?.message || "",
  }
}

export async function POST(request) {
  let tempDirectory

  try {
    const { code } = await request.json()

    if (!code || typeof code !== "string") {
      return Response.json({ error: "Java code is required." }, { status: 400 })
    }

    if (code.length > MAX_CODE_LENGTH) {
      return Response.json({ error: "Code is too long to run." }, { status: 400 })
    }

    const className = getPublicClassName(code)
    tempDirectory = await fs.mkdtemp(path.join(os.tmpdir(), "learnoop-java-"))
    const sourcePath = path.join(tempDirectory, `${className}.java`)

    await fs.writeFile(sourcePath, code, "utf8")

    try {
      await execFileAsync("javac", [sourcePath], {
        cwd: tempDirectory,
        timeout: RUN_TIMEOUT_MS,
        windowsHide: true,
      })
    } catch (error) {
      const output = normalizeOutput(error, error.stdout, error.stderr)
      return Response.json({
        status: "compile_error",
        ...output,
      })
    }

    try {
      const { stdout, stderr } = await execFileAsync("java", ["-cp", tempDirectory, className], {
        cwd: tempDirectory,
        timeout: RUN_TIMEOUT_MS,
        windowsHide: true,
      })

      return Response.json({
        status: stderr ? "runtime_warning" : "success",
        stdout,
        stderr,
      })
    } catch (error) {
      const output = normalizeOutput(error, error.stdout, error.stderr)
      return Response.json({
        status: "runtime_error",
        ...output,
      })
    }
  } catch (error) {
    return Response.json(
      {
        error: "Unable to run Java code.",
        stderr: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  } finally {
    if (tempDirectory) {
      await fs.rm(tempDirectory, { recursive: true, force: true })
    }
  }
}
