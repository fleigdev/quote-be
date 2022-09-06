const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//Create Express App
const app = express();

// Database
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("Connected to MongoDB database...");
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
    res.send("Hello, world");
});

app.get('/about', (req, res) => {
    res.send("Hello, About");
});

const QuotesRoute = require('./routes/Quotes');

app.use('/quotes', QuotesRoute);



//Starting Server
app.listen(3000, console.log("Listening on port 3000"));