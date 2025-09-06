import express from 'express';

const app = express();

app.get('/healthz', (req, res) => {
  res.sendStatus(200);
});

app.get('/ready', (req, res) => {
  res.sendStatus(200);
});

app.listen(80, () => {
  console.log('Server is running on port 80');
});