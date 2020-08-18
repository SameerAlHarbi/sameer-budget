const express = require('express');

const Router = express.Router();

Router.get('/', async (req, res, next) => {
    req.json('ok');
});

module.exports = Router;