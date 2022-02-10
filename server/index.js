require('dotenv').config();
const express = require('express');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

console.log(process.env.CLIENT_ID);

const app = express();

app.get('/', (req, res) => {
    res.send('hello world!')
});

const port = 3001;
app.listen(port, () =>{
    console.log(`express app listening at http://localhost:${port}`)
});