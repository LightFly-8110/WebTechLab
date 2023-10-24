const express = require('express');
const app = express();

app.get('/api/greet', (req, res) => {
  const message = { message: 'Hello, This is a basic Web Service!' };
  res.json(message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
