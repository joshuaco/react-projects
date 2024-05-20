const express = require('express');
let notes = require('./data/notes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = +req.params.id;
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

const generateID = () => {
  const newID =
    // How notes.map returns an array I use spread due the Math.max needs to receive individual numbers [Math.max( 1, 2, 3, 4, n )]
    notes.length > 0 ? Math.max(...notes.map((note) => note.id)) : 0;

  return newID + 1;
};

app.post('/api/notes', (req, res) => {
  const body = req.body;

  if (!body.content) {
    return res.status(400).json({
      error: 'content missing'
    });
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateID()
  };

  notes = notes.concat(note);

  res.json(note);
});

app.delete('/api/notes/:id', (req, res) => {
  const id = +req.params.id;
  notes = notes.filter((note) => note.id !== id);

  res.status(204).end();
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
