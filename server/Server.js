// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3306;

app.use(cors());

const db = mysql.createConnection({
  host: 'login-credentials.ckscb41dv4ih.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'numberst',
  database: 'login_credentials'
})
db.connect((err) => {
  if(err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log("Connected to the database");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});