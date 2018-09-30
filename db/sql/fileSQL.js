var FileSQL = {
    insert:'INSERT INTO report_file(file_id,report_id,file_name,file_address,file_submit_time) VALUES ?', 
    queryAll:'SELECT count(*) as count FROM report_file',  
    getFileById:'SELECT * FROM report_file WHERE file_id = ? ',
}
module.exports = FileSQL;