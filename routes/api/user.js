var express = require('express');
var router = express.Router();

const controller = require('../../db/controller/userController')

router.get('/queryUserByFilter', controller.queryUserByFilter);

module.exports = router