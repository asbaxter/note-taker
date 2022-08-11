const express = require('express');
const path = require('path');
const notepad = require('./Notepad')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// gets all notes
app.get('/notepad', (req, res) => {
    res.json(notepad);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));