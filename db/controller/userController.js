const userDao = require('../dao/userDao')
const utils = require('../../util/utils')


let queryUserByFilter = async (req, res, next) => {
    try {
        console.log(req.query);
        let { param, pageNum, pageSize } = req.query
        let intPageNum = parseInt(pageNum);
        let intPageSize = parseInt(pageSize);
        console.log(pageSize);
        console.log(pageNum);
        
        if (typeof param == 'string') {
          param = JSON.parse(param)
        }
        let filter = utils.obj2MySql(param);
        console.log(filter);
        let users = await userDao.queryByFilter(intPageNum, intPageSize, filter);
        if (users.code == 200) {
            res.send({
              code: 200,
              data: users.data,
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


let controller = {
    queryUserByFilter,
}
module.exports = controller