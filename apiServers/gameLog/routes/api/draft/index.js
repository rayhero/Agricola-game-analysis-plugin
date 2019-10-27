import { getDraftInfoFromBody } from './bodyParser'
const express = require('express');
const request = require('request');
const router = express.Router();

router.post('/', (req, res) => {
    request({
        url: req.body.url,
        method: 'GET',
        timeout: 10000,
    }, (error, response, body) => {
        const draftInfo = getDraftInfoFromBody(body)
        res.send(draftInfo);
    })

});

router.get('/', (req, res) => {
    res.send('!!!!!')
})

module.exports = router;