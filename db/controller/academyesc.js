const academyescDao = require('../dao/academyesc')
const utils = require('../../util/utils')


let queryAcademy = async (req, res, next) => {
    try {
        let aca = await academyescDao.queryAcademy();
        console.log(aca);
        var responseData = [];
        if(aca.code === 200) {
            aca.data.map((item, index) => {     
                responseData.push({
                    academy: item.academy,
                    academy_status: item.academy_status
                });
            });
            console.log(responseData)
        }
        res.send({
            code: 200,
            data: responseData,
            msg: 'success'
        })
    }
    catch (err) {
        res.send({
          code: 500,
          msg: err.message || err.msg
        })
    }
}

let queryMajor= async (req, res, next) => {
    let academyId = req.body.academyId;
    console.log(academyId);
    try {
        let major = await academyescDao.queryMajorFromAca(academyId);
        var responseData = [];
        if(major.code === 200) {
            major.data.map((item, index) => {     
                responseData.push({
                    academy: item.academy,
                    major: item.major,
                    status:item.status
                });
            });
            console.log(responseData)
        }
        res.send({
            code: 200,
            data: responseData,
            msg: 'success'
        })
    }
    catch (err) {
        res.send({
          code: 500,
          msg: err.message || err.msg
        })
    }
}

let queryClass = async (req, res, next) => {
    let classId = req.body.classId;
    console.log(classId);
    try {
        let classList = await academyescDao.queryClassFromMajor(classId);
        var responseData = [];
        if(classList.code === 200) {
            classList.data.map((item, index) => {     
                responseData.push({
                    major: item.major,
                    _class:item._class
                });
            });
            console.log(responseData)
        }
        res.send({
            code: 200,
            data: responseData,
            msg: 'success'
        })
    }
    catch (err) {
        res.send({
          code: 500,
          msg: err.message || err.msg
        })
    }
}

let controller = {
    queryAcademy,
    queryMajor,
    queryClass
}
module.exports = controller