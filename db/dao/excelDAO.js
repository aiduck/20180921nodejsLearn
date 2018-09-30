const queryHelper = require('../../util/DBQuery');
const excelSQL = require('../sql/excelSQL');

// 获取信息数量
let getCount = () => {
    let sql = excelSQL.queryNum;
    // queryHelper.queryPromise(sql, null)
    // .then((res, err) => {
    //     console.log(res);
    // })
    return queryHelper.queryPromise(sql, null);
}

let saveAcademy = (values) => {
    // 测试
    // var values = [
    //     ['1','11','John', 'Highway 71','1000-01-01'],
    //     ['2','13','Peter', 'Lowstreet 4','1000-01-01'],
    // ];
    // console.log(values)
    let sql = excelSQL.insert;
    // console.log(sql)
    return queryHelper.queryPromise(sql, [values]);
}

let getAcademyByID = (id) => {
    let sql = excelSQL.getFileById;
    return queryHelper.queryPromise(sql, id);
}

let qurryAcademy = () => {
    let sql = excelSQL.query;
    return queryHelper.queryPromise(sql, null);
}
let dao = {
    getCount,
    saveAcademy,
    getAcademyByID,
    qurryAcademy
}
module.exports = dao