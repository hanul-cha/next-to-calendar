const express = require('express');
const app = express();
const db = require('./src/config/toDoList');
const cors = require('cors');

const corsOptions = {
    origin: '*',
    Credentials: true,
}

app.use(cors(corsOptions));

app.get("/api/toDoList", (req, res) => {
    
    res.send(db);
})




module.exports = app;