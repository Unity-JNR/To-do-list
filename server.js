import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoute from './routes/user.js'
import loginRoute from './routes/login.js'
import taskRoute from './routes/tasks.js'
import {auth} from './middleware/authentication.js'
import { errorHandling } from './middleware/errorHandling.js';
// import cookieParser from 'cookie-parser'

config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors(
  { 
    origin :"http://localhost:8080",
    credentials: true
  }
))
app.use(express.json());
app.use(express.static('static'))

app.use(cookieParser());

app.use('/users', userRoute);
// app.use('/signup', signupRoute);
app.use('/login',auth, loginRoute);
app.use('/tasks', taskRoute);

app.delete('/logout', (req, res) => {
  // Clear the 'jwt' cookie
  res.clearCookie('jwt');
  
  res.send({
    msg: 'You have been logged out'
  });
});

app.use(errorHandling)
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
