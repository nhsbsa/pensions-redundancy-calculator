// External dependencies
const express = require('express');
const router = express.Router();

// clear session data - link in footer
router.post('/clear-session-data/', (req, res) => {
    req.session.data = {}
    res.render('index')
})

// =======================================
// Version Routes Files Below
// =======================================

router.use('/mvp', require('./views/mvp/_routes'));

router.use('/mvp/full-data', require('./views/mvp/full-data/_routes1'));

router.use('/mvp/partial-data', require('./views/mvp/partial-data/_routes2'));

module.exports = router;
