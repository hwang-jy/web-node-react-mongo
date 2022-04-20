import express from 'express';
const router = express();

router.get('/', (req, res) => {
  res.send("is homepage");
});

export default router;