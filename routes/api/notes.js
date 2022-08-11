const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const notes = require('../../Notes');

// gets notes from notepad.js and returns the JSON inside
router.get('/', (req, res) => res.json(notes));

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

module.exports = router;