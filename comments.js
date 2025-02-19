// Create web server
const express = require('express');
const app = express();
// Create path for comments
const comments = require('./comments');
// Create path for comments
app.use('/comments', comments);
// Create path for root
app.get('/', (req, res) => {
  res.send('Welcome to the jungle!');
});
// Create port for server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
