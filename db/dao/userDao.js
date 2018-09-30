const queryHelper = require('../../util/DBQuery');
const userSQL = require('../sql/userSQL');

// 筛选出符合条件的用户信息
let queryByFilter = (pageNum, pageSize, filter) => {
    let sql = `select * from user ${ filter ? 'where ' + filter : '' } limit ${(pageNum - 1) * pageSize}, ${pageSize} `;
    console.log(sql);
    return queryHelper.queryPromise(sql);
}

let dao = {
    queryByFilter
}
module.exports = dao
