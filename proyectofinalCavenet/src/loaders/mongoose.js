import mongoose from 'mongoose';
import { loadEnv } from '../config/env.js';

loadEnv();

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/cavenet';
mongoose.set('strictQuery', true);

mongoose
  .connect(uri, { autoIndex: true })
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => {
    console.error('Error conectando a MongoDB', err);
    process.exit(1);
  });