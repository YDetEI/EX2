const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    var data = {
        title: 'Bonjour!',
        content: 'これは、サンプルのコンテンツです。<br>this is sample content.'
    };
    res.render('bonjour', data);
});

module.exports = router;