const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    console.log(`app listening at port ${port}`);
});
