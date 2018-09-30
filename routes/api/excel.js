var express = require('express');
var router = express.Router();

const controller = require('../../db/controller/excelController')

router.get('/testget', controller.getCount);
router.get('/queryAcademy', controller.qurryAcademy);
router.post('/saveAcademy', controller.saveAcademy);

module.exports = router