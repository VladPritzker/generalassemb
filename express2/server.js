const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const catsRouter = require('./routes/cats');
const dogsRouter = require('./routes/cats');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(logger('dev'));

app.get('/', function (req, res) {
  res.json({ msg: 'Server running!' });
});

app.use('/cats', catsRouter);
app.use('/dogs', dogsRouter);

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
