const { articleConroller } = require('../controller');

const
    path = require('path'),
    router = require('express').Router(),
    { articleController } = require(path.join(__dirname, '..', 'controller'));
    
router.get('/', articleConroller.getAllExternalArticles);

module.exports = router;