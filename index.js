import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('welcome to Future Tech Pros');
});

const Port = 3000;

app.listen(Port, () => {
  console.log(`Server is listening to port ${Port}...`);
});
