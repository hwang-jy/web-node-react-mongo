import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  seq: Number,
  title: String,
  content: String,
  write_date: {type: Date, default: Date.now},
  auth_id: Number,
  hit: Number
});
// active 게시글이 살아있는지

const model = mongoose.model('contents', schema);

export default model;