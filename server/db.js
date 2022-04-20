import mongoose from 'mongoose';
const mongoUrl = "mongodb://172.17.0.2:27017/todos";

async function connectDatabase(){
  await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongoDB"))
  .catch(e => console.error(e));
}

connectDatabase();
export default mongoose;