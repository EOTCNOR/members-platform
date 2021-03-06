const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const auth = require('./routes/authentication')(router);
const members = require('./routes/members')(router);
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = global.Promise;

mongoose.connect(config.uri, {useNewUrlParser: true},(err) => {
    if(err) {
        console.log('Could NOT connect to database: ' + err);
    } else {        
        console.log('Connected to datbase: ' + config.db);
    }
});

// Static page for client
app.use(cors({
    origin: 'http://localhost:4200'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/client/dist/'));
app.use('/auth', auth);
app.use('/members', members);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(9595, () => {
    console.log('Listening on port 9595');
});