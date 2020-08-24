import express, { json } from 'express'


const app = express();

app.use(json());

app.get('/', function (req, res) {
  res.send('Eu sou full Cycle');
});


app.listen(8080)