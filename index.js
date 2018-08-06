const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;

mongoose.connect(config.uri, {useNewUrlParser: true},(err) => {
    if(err) {
        console.log('Could NOT connect to database: ' + err);
    } else {        
        console.log('Connected to datbase: ' + config.db);
    }
});

/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});*/


app.get('*', (req, res) => {
    res.send('<h1>hello world</h1>')
});

app.listen(9595, () => {
    console.log('Listening on port 9595');
});