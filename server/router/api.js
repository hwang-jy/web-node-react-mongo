import express from 'express';
import contents from '../models/contents.js';
import contentsApi from './contentsApi.js';
import countersApi from './countersApi.js';

const router = express();

router.use('/contents', contentsApi);
router.use('/counters', countersApi);

router.get('/', (req, res) => {
  res.send({"name":"is api"});
});

export default router;