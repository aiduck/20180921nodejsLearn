const queryHelper = require('../../util/DBQuery');
const SQL = require('../sql/academyesc');


// 获取所有学院信息数量
let queryAcademy = () => {
    let acaSQL = SQL.AcaSQL;
    let sql = acaSQL.query;
    return queryHelper.queryPromise(sql, null);
}
// 获取对应学院的专业信息
let queryMajorFromAca = (acaId) => {
    let majorSQL = SQL.MajorSQL;
    let sql = majorSQL.getMajorById;
    return queryHelper.queryPromise(sql, acaId);
}
// 获取对应专业的班级信息
let queryClassFromMajor = (major) => {
    let classSQL = SQL.ClassSQL;
    let sql = classSQL.getClassById;
    return queryHelper.queryPromise(sql, major);
}

let dao = {
    queryAcademy,
    queryMajorFromAca,
    queryClassFromMajor
}
module.exports = dao