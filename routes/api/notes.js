const { json } = require('express');
const express = require('express');
const { reset } = require('nodemon');
const uuid = require('uuid');
const router = express.Router();
const notes = require('../../Notes');

// gets notes from notepad.js and returns the JSON inside
router.get('/', (req, res) => res.json(notes));

router.get('/:id', (req, res) => {
    const found = notes.some(note => note.id === parseInt(req.params.id));
    
    if (found){
        res.json(notes.filter(note => note.id === parseInt(req.params.id)));
    } else {
        res.status(400),json({ msg: `No note with the id of ${req.params.id}`})
    }
});

router.post('/', (req, res) => {
    const addedNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    }

    if(!addedNote.title || !addedNote.text){
       return res.status(400).json({ msg: 'Include Note Title and Text'});
    }

    notes.push(addedNote);
    res.json(notes);
});

router.put('/:id', (req, res) => {
    const found = notes.some(note => note.id === parseInt(req.params.id));

    if(found) {
        const updNote = req.body;
        notes.forEach(note => {
            if(note.id === parseInt(req.params.id)){
                note.title = updNote.title ? updNote.title : updNote.title;
                note.text = updNote.text ? updNote.text : updNote.text;

                res.json({ msg: 'Note was updated', note});
            }
        });
    }
    else {
        res.status(400).json({ msg: `No notes found with the id of ${req.params.id}`});
    }
})

module.exports = router;