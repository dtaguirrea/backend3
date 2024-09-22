import express from 'express';
import userRoute from './routers/user.router.js';
import petRoute from './routers/pet.router.js';
import mocksRoute from './routers/mocks.router.js'; 
import { dbConnection } from './config/db.connection.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute);

app.use('/api/pets', petRoute);

app.use('/api/mocks', mocksRoute);

const PORT = 8080;

dbConnection().then(() => console.log('Connected to MongoDB'));

const server = app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`)
);
server.on('error', (err) => console.log(err));
