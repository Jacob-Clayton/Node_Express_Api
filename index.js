import express from 'express';
import usersRoutes from './routes/users.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/',(req, res) => res.send('Hello from home page.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));