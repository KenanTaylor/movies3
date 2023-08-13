const express = require("express");
const app = express();
const mysql = require('mysql2')
//const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    User: 'root',
    password: 'Cookboy@23',
    database:'movie3',
})


app.get('/', (req,res)=> {

    const sqlInsert = " INSERT INTO movie3 (movieName, movieReview) VALUES ('incetion','good movie');"
    db.query(sqlInsert, (err,result)=>{
        console.log(err);
       res.send("hey") 

    })    
});


app.listen(3000,() => {
    console.log("running on port 3000");
});
