var express = require('express');
var router = express.Router();

const controller = require('../../db/controller/academyesc')

router.get('/queryAcademy', controller.queryAcademy);
router.post('/queryMajor', controller.queryMajor);
router.post('/queryClass', controller.queryClass);


module.exports = router