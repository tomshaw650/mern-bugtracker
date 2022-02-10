
// initialise Express
const express = require('express');
const app = express();

// initialise port
const port = process.env.PORT || 5000;

// handle CORS issues
app.use(( req, res, next ) => {
    res.header('Access-Control-Allow-Origin', '*');
    res,header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


// send Express response
app.use(( req, res, next ) => {
    res.send("Express is working");
});

// listen for port
app.listen( port, () => {
    console.log(`Server running on port ${port}`);
})