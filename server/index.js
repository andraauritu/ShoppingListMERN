const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./src/routes/router');
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.use(cors()); //this will allow all requests from all origins to access our API
//configure the app

app.use(router);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB');
    console.log(err);
});

app.listen(8080, () => {
    console.log('Server is running on port 8000');
});