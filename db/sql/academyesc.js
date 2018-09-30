var AcaSQL = {
    insert:'INSERT INTO academy(academy,academy_status) VALUES ?', 
    queryNum:'SELECT count(*) as count FROM academy',
    query:'SELECT * FROM academy',
    // getAcaById:'SELECT * FROM academy WHERE academy = ?',
}
var MajorSQL = {
    insert:'INSERT INTO major(academy,major,status) VALUES ?', 
    // queryNum:'SELECT count(*) as count FROM major',
    // query:'SELECT * FROM major',
    getMajorById:'SELECT * FROM major WHERE academy= ?',
}
var ClassSQL = {
    insert:'INSERT INTO class_table(major,_class) VALUES ?', 
    // queryNum:'SELECT count(*) as count FROM class_table',
    // query:'SELECT * FROM class_table',
    getClassById:'SELECT * FROM class_table WHERE major = ? ',
}


var SQL = {
    AcaSQL,
    MajorSQL,
    ClassSQL
}
module.exports = SQL;