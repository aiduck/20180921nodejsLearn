var UserSQL = {
    insert:'INSERT INTO user(user_id,user_name,user_pwd,user_sex,user_mail,user_phone,account_state,user_identity) VALUES ?', 
    queryNum:'SELECT count(*) as count FROM user',
    query:'SELECT * FROM user',
    getUserById:'SELECT * FROM user WHERE user_id = ? ',
    // queryByFilter: `select * from user ${ filter ? 'where ' + filter : '' } limit ${(pageNum - 1) * pageSize}, ${pageSize} `,
}
module.exports = UserSQL;
