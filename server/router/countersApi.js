import express from 'express';
import counters from '../models/counters.js';

const router = express();

router.get('/', (req, res) => {
  console.log("api/counters test");
  res.send({"name":"test"});
});

router.get('/contents', (req, res) => {
  const query = {"_id": "contents"};
  const projection = {_id:false, seq:true};
  counters
    .find(query, projection)
    .exec((err, result) => {
      if(err) throw err;

      res.send(result);
    });
});

export default router;