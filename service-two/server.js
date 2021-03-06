'use strict';

const express = require('express');

const app = express();

app.get('/service-two/', (req, res) => {
    res.status(200).send('Service two: Hello, world!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`service-two server listening on port ${PORT}`);
});
