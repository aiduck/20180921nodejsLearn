const queryHelper = require('../../util/DBQuery');
const fileSQL = require('../sql/fileSQL');

// 获取信息数量
let getCount = () => {
    let sql = fileSQL.queryAll;
    // queryHelper.queryPromise(sql, null)
    // .then((res, err) => {
    //     console.log(res);
    // })
    return queryHelper.queryPromise(sql, null);
}

let saveFile = (values) => {
    // 测试
    // var values = [
    //     ['1','11','John', 'Highway 71','1000-01-01'],
    //     ['2','13','Peter', 'Lowstreet 4','1000-01-01'],
    // ];
    // console.log(values)
    let sql = fileSQL.insert;
    // console.log(sql)
    return queryHelper.queryPromise(sql, [values]);
}

let getFileByID = (id) => {
    let sql = fileSQL.getFileById;
    console.log(sql)
    return queryHelper.queryPromise(sql, id);
}
let dao = {
    getCount,
    saveFile,
    getFileByID
}
module.exports = dao