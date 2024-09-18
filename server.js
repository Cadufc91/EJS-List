const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  let quantity = 0;
  let items = [];

  res.render('index', { quantity, items });
});

app.post('/', (req, res) => {
  const { quantity } = req.body;

  const items = Array.from({ length: parseInt(quantity) }).map((_, index) => ({
    number: index + 1,
  }));

  res.render('index', { quantity, items });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;