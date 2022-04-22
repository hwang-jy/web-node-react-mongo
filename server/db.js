import mongoose from 'mongoose';

const ip = "172.17.0.2";
const port = "27017";
const db = "todos";
const mongoUrl = `mongodb://${ip}:${port}/${db}`;

async function connectDatabase(){
  await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongoDB"))
  .catch(e => console.error(e));
}

connectDatabase();
export default mongoose;