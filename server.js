const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Albrt Einstein',
  },
  {
    id: 1,
    name: 'Isaac Newton',
  },
];

app.use((req, res, next) => {
  const start = Date.now();

  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta} ms`);
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'friend does not exist',
    });
  }
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello Albert</li></ul>');
});

app.post('/messages', (req, res) => {
  console.log('Updating messages');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
