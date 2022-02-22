// initialise Express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

require('dotenv').config();

const app = express();

// initialise port
const port = process.env.PORT || 5000;

// connect to database
mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));

mongoose.Promise = global.Promise;



// handle CORS issues
app.use(( req, res, next ) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

app.use('/api', routes);


// send Express response
app.use(( req, res, next ) => {
    res.send("Express is working");
});

// listen for port
app.listen( port, () => {
    console.log(`Server running on port ${port}`);
})