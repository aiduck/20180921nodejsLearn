const fileDao = require('../dao/fileDAO')
const utils = require('./../../util/utils')

// 获取所有的政策制度
let getFillCount = async (req, res, next) => {
    console.log(req.body)
    console.log(req.body.report_id)
    console.log(req.body.file_submit_time)
    try {
        let file = await fileDao.getCount();
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
        // console.log(err)
        res.send({
          code: 500,
          msg: err.message || err.msg
        })
    }
}

let saveFile = async (req, res, next) =>{
    const file = req.file
    console.log(req.body)
    console.log(file)
    // var values = [
    //     ['1','11','John', 'Highway 71','1000-01-01'],
    //     ['2','13','Peter', 'Lowstreet 4','1000-01-01'],
    // ];
    var values = [];
    let value = [`${utils.getId('report_file')}`,`${req.body.report_id}`,`${file.originalname}`,`${file.path}`,`${req.body.file_submit_time}`];
    values.push(value);
    console.log(values);
    try {
        let file = await fileDao.saveFile(values);
        res.send({
            code: 200
        })
    }
    catch (err) {
        res.send({
          code: 500,
          msg: err.message || err.msg
        })
    }
}

let getFileByID = async (req, res, next) =>{
    let {id} = req.body;
    var address;
    var fileName;
    var data;
    try {
        let file = await fileDao.getFileByID(id);
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
let controller = {
    getFillCount,
    saveFile,
    getFileByID
}
module.exports = controller


