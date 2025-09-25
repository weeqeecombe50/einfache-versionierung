const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Willkommen bei der einfachen API Versionierung!');
});

app.listen(port, () => {
  console.log(`Server läuft unter http://localhost:${port}`);
});