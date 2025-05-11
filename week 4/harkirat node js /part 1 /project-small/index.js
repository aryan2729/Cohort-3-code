#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const program = new Command();
const NOTES_DIR = path.join(__dirname, 'notes');

// Ensure notes directory exists
if (!fs.existsSync(NOTES_DIR)) {
  fs.mkdirSync(NOTES_DIR);
}

// Get today's date
function getTodayFileName() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return `${today}.md`;
}

// Create today's note
program
  .command('create')
  .description('Create a new note for today')
  .option('-t, --title <title>', 'Add a title to the note')
  .action((options) => {
    const filePath = path.join(NOTES_DIR, getTodayFileName());

    if (fs.existsSync(filePath)) {
      console.log(`Note already exists: ${filePath}`);
      return;
    }

    const title = options.title || 'Untitled Note';
    const content = `# ${title}\n\nDate: ${new Date().toLocaleString()}\n\n---\n`;

    fs.writeFileSync(filePath, content);
    console.log(`Note created: ${filePath}`);
  });

// Open today's note
program
  .command('open')
  .description('Open today\'s note in default editor')
  .action(() => {
    const filePath = path.join(NOTES_DIR, getTodayFileName());

    if (!fs.existsSync(filePath)) {
      console.log('Note does not exist. Use "create" command first.');
      return;
    }

    // Mac/Linux: open, Windows: start
    const openCommand = process.platform === 'win32' ? 'start' : 'open';
    exec(`${openCommand} "${filePath}"`);
  });

program.parse(process.argv);
