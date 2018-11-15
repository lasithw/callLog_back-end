var con = require('../config/connection');

var loginData = {
    logindata(user, password) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT username, password FROM login WHERE username ="' + user + '" AND password = "' + password + '"';
            var params = [user, password];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        
                    } else {
                        resolve('no user')
                    }
                }
            })
        })
    }
}
module.exports = loginData;