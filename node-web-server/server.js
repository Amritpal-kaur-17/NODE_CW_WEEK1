const {response }  = require("express");
const express = require('express');
const app = express();
//const users = require("./user.json");

//const getUserFunction = (req, res) => {
  // res.send(user);

  // app.get('/user', getUserFunction);
//app.get('/user', getUserFunction);

//const getFunction = (req, res) => {
 //  res.send("hey")};

app.get('/', (req, res) => {
  res.send('Hello Express')
});


app.listen(3000, () => console.log("Server is up and running"));

