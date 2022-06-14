'use strict';

const express = require('express');

const app = express();

app.get('/service-one/', (req, res) => {
    res.status(200).send('Service one: Hello, world!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`service-one server listening on port ${PORT}`);
});