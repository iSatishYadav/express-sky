const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const routes = require('./routes')


app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, () => {
    console.log('App listening at http://localhost:3000');
});