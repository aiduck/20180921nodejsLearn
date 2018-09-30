var express = require('express');
var router = express.Router();

const controller = require('../../db/controller/fileController')

router.get('/testget', controller.getFillCount);
router.post('/testpost', controller.getFillCount);
router.post('/savefile', controller.saveFile);
router.post('/fileinfo', controller.getFileByID);

module.exports = router