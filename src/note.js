#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

const NOTES_DIR = path.join(os.homedir(), 'Dropbox', 'dev-notes');
!fs.existsSync(NOTES_DIR) && fs.mkdirSync(NOTES_DIR, { recursive: true });

const [,, title, context] = process.argv;
const DATE = new Date().toISOString().split('T')[0];
const TIME = new Date().toTimeString().split(' ')[0];
const FILENAME = path.join(NOTES_DIR, `${DATE}_${title}.md`);

const content = `# ${title}
Created: ${DATE} ${TIME}

## Context
${context}

## Notes
- 

## Tags
#${title.replace(/ /g, '-')} #quick-note

## References
- 
`;

fs.writeFileSync(FILENAME, content);
execSync(`cursor --wait "${FILENAME}"`);
console.log(`Note saved: ${FILENAME}`);
