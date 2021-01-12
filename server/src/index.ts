import express from 'express';
import { questions } from './questions';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(questions);
});

app.listen(port);

console.log('[app]: http://localhost:3000');
