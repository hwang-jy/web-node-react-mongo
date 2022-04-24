import express from 'express';
import contents from '../models/contents.js';
import counters, { getNextSequence } from '../models/counters.js';

const router = express();

router.get('/', (req, res) => {
  const query = {};
  const projection = {_id: false, title:true, content:true, seq:true};
  const sort = {_id: -1};
  const page = 0;
  const limit = 10;

  contents
    .find(query, projection)
    .sort(sort)
    .skip(page)
    .limit(limit)
    .exec((err, result) => {
      if(err) throw err;

      res.send(result);
    });
});

router.get('/:id', (req, res) => {
  const documentId = parseInt(req.params.id);
  const query = {seq: {$eq: documentId}};

  contents
    .find(query)
    .limit(1)
    .exec((err, result) => {
      if(err) throw err;

      res.send(result[0]);
    });
});

router.put('/write', (req, res) => {
  //res.send('update...');
});


export default router;