const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../db/db.js');
const { v4: uuidv4 } = require('uuid');


// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });


  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
    
    if (req.body) {
      const newNote = {
        title: title,
        text: text,        
        note_id: uuidv4(),

      };
      console.log(text);
    console.log(newNote);
      readAndAppend(newNote, './db/db.json');
      res.json(`note added successfully 🚀`);
    } else {
      res.error('Error in adding a note');
    }
  });

module.exports = notes;