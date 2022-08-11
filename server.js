const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// gets entire public folder and its content as static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/notes', require('./routes/api/notes'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));