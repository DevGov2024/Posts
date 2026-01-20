const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog');

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
