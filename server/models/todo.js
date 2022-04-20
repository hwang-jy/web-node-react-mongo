import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String
});

const model = mongoose.model('todos', schema);

export default model;