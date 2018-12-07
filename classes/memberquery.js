var con = require('../config/connection');

var data = {

    getMemberData() {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT * FROM member';
            con.query(sql, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        // console.log("callData");
                    }
                }
            })
        })
    },

    getMemberCount(type) {
        return new Promise((resolve, reject) => {
            var sql = `SELECT member.number, member.name, 1/2*COUNT(CASE WHEN call_log.callType="incoming" THEN 1 END) AS incoming, 1/2*COUNT(CASE WHEN call_log.callType="outgoing" THEN 1 END) AS outgoing, call_log.date
                        FROM member,call_log 
                        WHERE call_log.agent = member.name 
                        GROUP BY member.name, date`;
            con.query(sql, [type], (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        // console.log("callData");
                    }
                }
            })
        })
    },
    
    getChartData(name){
        return new Promise((resolve, reject) => {
            var sql = 'SELECT member.number,member.name, 1/2*COUNT(CASE WHEN call_log.callType="incoming" THEN 1 END) AS incoming, 1/2*COUNT(CASE WHEN call_log.callType="outgoing" THEN 1 END) AS outgoing, call_log.date FROM member,call_log WHERE call_log.agent = member.name AND member.name = "' + name + '" GROUP BY date';
            con.query(sql, name, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        // console.log("callData");
                    }
                }
            })
        })
    },

    add: (number, name, member, main_region, sub_region) => {
        return new Promise((resolve, reject) => {
            var sql = "INSERT INTO member(number, name, member, main_region, sub_region) VALUES ('" + number + "','" + name + "','" + member + "','" + main_region + "','" + sub_region + "')";
            var param = [number, name, member, main_region, sub_region];
    
            con.query(sql, param, (err, result) => {
                if (err) {
                    console.log(err);
                    resolve(false);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = data;