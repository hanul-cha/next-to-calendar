const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const db = require('./src/config/toDoList');
const cors = require('cors');
const fs = require('fs');

const corsOptions = {
    origin: '*',
    Credentials: true,
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/toDoList", (req, res) => {
    res.send(db);
})

app.post("/api/toDoList", (req, res) => {
    const setList = req.body;
    /* console.log(setList); */
    res.json("ok");
    fs.readFile("./src/config/toDoList.json", (err, data) => {
        if(err) throw err;
        const dbList = JSON.parse(data);
        dbList.push(setList)
        /* console.log(dbList); */
        fs.writeFile("./src/config/toDoList.json", JSON.stringify(dbList), (err) => {
            if(err) throw err;
        });
    });
   
})




module.exports = app;