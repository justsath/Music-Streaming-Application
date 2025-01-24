const express = require('express');
const songsRoute = require('./routes/songs');

const app = express();
app.use('/api/songs', songsRoute);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
