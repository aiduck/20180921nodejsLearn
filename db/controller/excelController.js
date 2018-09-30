const excelDao = require('../dao/excelDAO')
const utils = require('../../util/utils')
var qs = require('qs');

// 获取所有的政策制度
let getCount = async (req, res, next) => {
    console.log(req)
    try {
        let file = await excelDao.getCount();
        var responseData = [];
        if(file.code === 200) {
            let results = JSON.stringify(file.data);
            results = JSON.parse(results);
            responseData.push({
                count:results[0]['count']
            })
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

let saveAcademy = async (req, res, next) =>{
    console.log(req.body)
    let academyArr = req.body;
    var values = [];
    academyArr.map((item, index) => {
        console.log(item.name);
        console.log(item.state);
        let value = [`${item.name}`,`${item.state}`]
        values.push(value)
    });
    console.log(values);
    // var values = [
    //     ['1','11','John', 'Highway 71','1000-01-01'],
    //     ['2','13','Peter', 'Lowstreet 4','1000-01-01'],
    // ];
    // let value = [`${utils.getId('report_file')}`,`${req.body.report_id}`,`${file.originalname}`,`${file.path}`,`${req.body.file_submit_time}`];
    // values.push(value);
    // console.log(values);
    try {
        let academy = await excelDao.saveAcademy(values);
        console.log(academy);
        if(academy.code === 200) {
            res.send({
                code: 200,
                msg: 'success'
            })
        }
    }
    catch (err) {
        res.send({
          code: 500,
          msg: err.message || err.msg
        })
    }
}

let getAcademyByID = async (req, res, next) =>{
    let {id} = req.body;
    var address;
    var fileName;
    var data;
    try {
        let file = await excelDao.getAcademyByID(id);
        if(file.code === 200) {
            let results = JSON.stringify(file.data);
            results = JSON.parse(results);
            console.log(results);
            address = results[0].file_address;
            console.log(address);
            fileName = results[0].file_name;
            data = {
                address,
                fileName
            }
        }
        res.send({
            code: 200,
            data: data,
            msg: 'success'
        })
    }
    catch (err) {
        // console.log(err)
        res.send({
          code: 500,
          msg: err.message || err.msg
        })
    }
}

let qurryAcademy = async (req, res, next) => {
    try {
        let file = await excelDao.qurryAcademy();
        console.log(file);
        var responseData = [];
        if(file.code === 200) {
            file.data.map((item, index) => {     
                responseData.push({
                    academy: item.academy,
                    academy_status: item.academy_status
                })
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
    getCount,
    saveAcademy,
    getAcademyByID,
    qurryAcademy
}
module.exports = controller


