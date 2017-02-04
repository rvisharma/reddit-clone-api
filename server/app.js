import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

mongoose.connect('mongodb://rvi:newpassword@ds141209.mlab.com:41209/cms', () => {
  console.log('Connected to MLab!..');
})

const app = express();

// Middleware
app.use(bodyParser.json())

app.use('/api', routes);

export default app;