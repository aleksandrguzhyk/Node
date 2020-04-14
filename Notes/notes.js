const fs = require('fs')
const chalk = require('chalk');

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title )

    if (note) {
      console.log(chalk.inverse(note.title));
      console.log('body: ',note.body);
    } else {
      console.log(chalk.red.inverse('Note not found!'));
    } 
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicatedNote = notes.find((note) => note.title === title)

    // debugger

  if (!duplicatedNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New Note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync('notes.json').toString()
    return JSON.parse(dataJSON)
  } catch (error) {
      return []
  }
}

const removeNote = (title) => {
  const notes = loadNotes()

  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed'));
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found'));
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.bold.green.inverse('Your notes:'));  

  notes.filter((note) => {
    console.log(chalk.grey.inverse('Your note:'));  

    console.log('title: ', note.title);
    console.log('body: ', note.body);
  })
} 

module.exports = { 
  readNote: readNote, 
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
}

