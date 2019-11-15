import { getDraftInfoFromBody } from './bodyParser'
const agricolaDraftUrl = require('../../config').agricolaDraftUrl
const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/:id', (req, res) => {
    request({
        url: agricolaDraftUrl + req.params.id,
        method: 'GET',
        timeout: 10000,
    }, (error, response, body) => {
        const draftInfo = getDraftInfoFromBody(body)
        res.send(draftInfo);
    })
});

module.exports = router;