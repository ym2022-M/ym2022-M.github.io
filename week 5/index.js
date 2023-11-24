const express = require('express');

const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:''
})

const port = 5000;
app.get("/",(req, res) => {
    res.send("<h1>HOME PAGE</h1>")

});

app.listen(5000, () =>{ 
    console.log(`server started on ${port}.`);


})