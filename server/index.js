require('dotenv').config();
const express = require('express');
const querystring = require('querystring')
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

console.log(process.env.CLIENT_ID);

const app = express();

const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  
  
  const stateKey = 'spotify_auth_state';
  

app.get('/login', (req, res) => {
    const state = generateRandomString(16);
    res.cookie(stateKey, state)

    const scope = 'user-read-private user-read-email';
    const queryParams = querystring.stringify({
      client_id: CLIENT_ID,
      response_type: 'code',
      redirect_uri: REDIRECT_URI,
      state: state,
      scope: scope,
    });
  
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
  });



const port = 8888;
app.listen(port, () =>{
    console.log(`express app listening at http://localhost:${port}`)
});