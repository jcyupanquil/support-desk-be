const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./src/middleware/errorMiddleware');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/tickets', require('./src/routes/ticketRoutes'));



app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

