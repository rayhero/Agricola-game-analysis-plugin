const express = require('express');
const request = require('request');
const crawlerDomainName = require('../../../config').crawlerDomainName
const router = express.Router();

router.get('/:id', (req, res) => {
    request({
        url: crawlerDomainName + req.params.id,
        method: 'GET',
        timeout: 10000,
    }, (error, response, body) => {
        res.send(body);
    })
});

module.exports = router;