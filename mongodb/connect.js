import mongoose from 'mongoose'; //modelling library for mongo db

const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error));
};

export default connectDB;
