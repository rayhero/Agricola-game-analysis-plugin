require('babel-register')({
    presets: ['env']
})

module.exports = require('./bin/server.js')