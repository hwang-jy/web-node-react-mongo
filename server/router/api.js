import express from 'express';
import todo from '../models/todo.js';
const router = express();

router.get('/', (req, res) => {
  res.send("is api");
});

router.get('/test', (req, res) => {
  todo.find({}, {_id:false, name:true}, (err, result) => {
    if(err) throw err;

    res.send(`${req.originalUrl} received data ${result}`);
  });
});

export default router;