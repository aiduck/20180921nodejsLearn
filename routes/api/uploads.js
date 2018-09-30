var express = require('express');
var router = express.Router();

const path = require('path')
const multer = require('multer')
const config = require('../../config')
const controller = require('../../db/controller/fileController')

/**
 * 动态地生成上传中间件
 * @param {*获取上传路径} key 
 * @param {*表单中的name属性} name 
 */
let getUpload = (key, name) => {
    const storage = multer.diskStorage({
        destination: config.uploadPath[key],
        filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
    const upload = multer({
        storage: storage
    }).single(name)
    return upload
}

// 获取文件上传中间件
const projectUpload = getUpload('fileDemo', 'uploadFile')

// 上传项目材料
router.post('/savefile', projectUpload, controller.saveFile);

module.exports = router