const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// bodyParser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

//database connection
const DBconnect = require('./config/DBconnect');
DBconnect()

//use the routes
const Category = require('./routes/category');
app.use('/category', Category);

const PORT = 5000;
app.listen(PORT || process.env.PORT, () => {
  console.log(`listening on port ${PORT} or http://localhost:${PORT}`);
});