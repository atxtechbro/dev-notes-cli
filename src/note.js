#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const os = require("os");
const { getEditor, getNotesDir } = require("./config");

try {
  const NOTES_DIR = getNotesDir();
  !fs.existsSync(NOTES_DIR) && fs.mkdirSync(NOTES_DIR, { recursive: true });

  const [, , title, context] = process.argv;
  const DATE = new Date().toISOString().split("T")[0];
  const TIME = new Date().toTimeString().split(" ")[0];
  const FILENAME = path.join(NOTES_DIR, `${DATE}_${title}.md`);

  const content = `# ${title}
Created: ${DATE} ${TIME}

## Context
${context}

## Notes
- 

## Tags
#${title.replace(/ /g, "-")} #quick-note

## References
- 
`;

  fs.writeFileSync(FILENAME, content);

  execSync(`${getEditor()} "${FILENAME}"`, { stdio: "inherit" });
  console.log(`Note saved: ${FILENAME}`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
