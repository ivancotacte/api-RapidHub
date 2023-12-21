const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));