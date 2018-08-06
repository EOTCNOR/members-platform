const User = require('../models/user');
const Member = require('../models/member');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {

    router.post('/newMember', (req, res) => {
        res.send('test');        
    });

    return router;
}