var router = require('express').Router();

router.use('/api', require('./api'));
router.get('/', (req, res) => {
    res.send('./')
})

module.exports = router;
