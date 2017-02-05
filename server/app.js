import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const mLab = {
  username: process.env.MLAB_USER,
  password: process.env.MLAB_PWD
}

mongoose.connect(`mongodb://${mLab.username}:${mLab.password}@ds141209.mlab.com:41209/cms`, () => {
  console.log('Connected to MLab!');
})

const app = express();

// Middleware
app.use(bodyParser.json())

app.use('/api', routes);

export default app;