var ExcelSQL = {
    insert:'INSERT INTO academy(academy,academy_status) VALUES ?', 
    queryNum:'SELECT count(*) as count FROM academy',
    query:'SELECT * FROM academy',
    getFileById:'SELECT * FROM academy_status WHERE academy = ? ',
}
module.exports = ExcelSQL;