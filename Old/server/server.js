const bodyParser = require('body-parser');

// Our DB Configuration
require('./src/database');

// server.js
const express = require('express');
const app = express();
var router = express.Router();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello World ! ");
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use('/posts', require('./src/routes/post.router'));
app.use('/questions', require('./src/routes/question.router'));
app.use('/users', require('./src/routes/user.router'));

// will redirect all the non-api routes to react frontend
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client','build','index.html'));
});
