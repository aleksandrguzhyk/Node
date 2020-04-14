// const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');

yargs.command({
  command: 'add',
  describe: 'Add a new Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }    
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Listing all Notes',
  builder: {
    title: {
      describe: 'Note title',
      // demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      // demandOption: true,
      type: 'string'
    }
  },
  handler() {
    notes.listNotes()
  }
})

yargs.parse()

// const command = process.argv[2]

// if (command === 'add') {
//   console.log('add is working');
  
// }
// const note = getNotes();

// console.log(note);
// // console.log(validator.isURL(note));
// console.log(chalk.bold.blue(note));
// console.log(yargs.argv);


// const {name, sum} = require('./utils.js')

// console.log('Hello', name);
// const a = sum(2, 3)
// console.log(a);

// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'File creating in Node.js')

// fs.appendFileSync('notes.txt', 'data to append');

