const express = require('express');
const path = require('path');
require('dotenv').config();

const cricketRoutes = require('./routes/cricket');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use('/api/cricket', cricketRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});