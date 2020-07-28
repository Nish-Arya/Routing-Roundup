const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send("Hello from Express!");
})

app.get("*xyz", (req, res) => {
  res.send("That's all I wrote.");
});

app.all('*', (req, res) => {

  res.render("index", {
    method: req.method,
    path: req.path,
    randomNumber: Math.floor(Math.random() * 10)
  })
});

app.listen(8081, () => console.log('Listening on port 8081...'));