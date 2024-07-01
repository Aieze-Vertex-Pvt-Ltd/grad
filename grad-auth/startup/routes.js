
const express = require('express');
const auth = require('../routes/auth');

module.exports = function (app) {
    app.use(express.json());
    app.use(function (err, req, res, next) {
        if (err) {
            return res.sendStatus(400);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
        res.header("Server", "");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
        );
        next();
    });

   
    app.use('/api/v1/auth', auth);
}



