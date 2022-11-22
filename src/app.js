const express = require('express');
const artistRouter = require('./routes/artist')

const app = express();
app.use(express.json());


app.use('/artist', artistRouter);

app.get('/', (req, res) => {
    res.status(200).json('Hello World V2')
})




module.exports = app