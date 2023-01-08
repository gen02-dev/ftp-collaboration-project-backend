import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('welcome to foody admin');
});

const Port = 3000;

app.listen(Port, () => {
  console.log(`Server is listening to port ${Port}...`);
});
