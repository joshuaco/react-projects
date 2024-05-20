const express = require('express');
let persons = require('./data/persons');

const app = express();

app.use(express.json());

// endpoints
app.get('/', (req, res) => {
  res.send('<h1>PhoneBook</h1>');
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = +req.params.id;
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.post('/api/persons', (req, res) => {
  const body = req.body;
  const newID = Math.floor(Math.random() * 50000 + 10000);

  if (!body.name) {
    return res.status(400).json({
      error: 'Name is missing'
    });
  } else if (!body.number) {
    return res.status(400).json({
      error: 'Number is missing'
    });
  }

  const samePerson = persons.find((person) => person.name === body.name);

  if (samePerson) {
    return res.status(400).json({ error: 'name must be unique' });
  }

  const person = {
    id: newID,
    name: body.name,
    number: body.number
  };

  persons = persons.concat(person);

  res.json(person);
});

app.delete('/api/persons/:id', (req, res) => {
  const id = +req.params.id;

  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.get('/info', (req, res) => {
  const personsInfo = {
    length: persons.length,
    date: new Date()
  };

  res.send(`
    <p>Phonebook has info for ${personsInfo.length} people</p>
    <p>${personsInfo.date.toString()}</p>
  `);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
