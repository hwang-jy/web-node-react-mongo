import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  _id: String,
  seq: Number
});
// active 게시글이 살아있는지

const model = mongoose.model('counters', schema);

export const getNextSequence = async (key) => {
  let count = model
    .updateOne({_id:key}, {$inc: {seq: 1}})
    .exec();

  console.log(`${key} inc ${count}`);
  console.log(count);
  return count;
}

export default model;
