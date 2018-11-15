var con = require('../config/connection');

var data = {

    totalcall(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT user, COUNT(callType) AS totalcall, COUNT(CASE WHEN callType="incoming" THEN 1 END) AS incoming, COUNT(CASE WHEN callType="outgoing" THEN 1 END) AS outgoing FROM call_log WHERE date = CURDATE() GROUP BY user';
            var params = [type];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        // console.log("Call Type :" + i);
                    }
                }
            })
        })
    },


    // outgoing(type) {
    //     return new Promise((resolve, reject) => {
    //         var sql = 'SELECT COUNT(*) AS outgoing FROM call_log WHERE callType ="outgoing" AND date = CURDATE() GROUP BY user';
    //         var params = [type];
    //         con.query(sql, params, (err, rows) => {
    //             if (err) {
    //                 console.log(err);
    //                 reject(err)
    //             }
    //             else {
    //                 if (rows.length > 0) {
    //                     resolve(rows);
    //                     // console.log("Call Type :" + i);
    //                 }
    //             }
    //         })
    //     })
    // },

    // incoming(type) {
    //     return new Promise((resolve, reject) => {
    //         var sql = 'SELECT COUNT(*) AS incoming FROM call_log WHERE callType ="incoming" AND date = CURDATE() GROUP BY user';
    //         var params = [type];
    //         con.query(sql, params, (err, rows) => {
    //             if (err) {
    //                 console.log(err);
    //                 reject(err)
    //             }
    //             else {
    //                 if (rows.length > 0) {
    //                     resolve(rows);
    //                     // console.log("Call Type :" + i);
    //                 }
    //             }
    //         })
    //     })
    // }
}
module.exports = data;