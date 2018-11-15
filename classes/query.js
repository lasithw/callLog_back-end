var con = require('../config/connection');

var data = {

    insertData: (CallType, Agent, CallerID, CallTime, Event, HoldTime, QueueName, Time, TotalTime) => {
        return new Promise((resolve, reject) => {
            var sql = "INSERT INTO calldata(CallType, Agent, CallerID, CallTime, Event, HoldTime, QueueName, Time, TotalTime ) VALUES ('" + CallType + "','" + Agent + "','" + CallerID + "','" + CallTime + "','" + Event + "','" + HoldTime + "','" + QueueName + "','" + Time + "','" + TotalTime + "')";
            var param = [CallType, Agent, CallerID, CallTime, Event, HoldTime, QueueName, Time, TotalTime];

            con.query(sql, param, (err, result) => {
                if (err) {
                    console.log(err);
                    resolve(false);
                } else {
                    resolve(result);
                }
            });
        });

    },


    getData() {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT * FROM calldata';
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

    callType(type, i, user) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT COUNT (*) AS callcount FROM call_log WHERE callType ="' + i + '" AND User = "' + user + '" AND date = CURDATE()';
            var params = [type, i, user];
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

    todayCall(type,user) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT COUNT (*) AS todaycount FROM call_log WHERE User = "' + user + '" AND date = CURDATE()';
            var params = [type, user];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        // console.log("Call Type :");
                    }
                }
            })
        })
    },

    addCallLog: (id, user, callType, agent, callerID, callTime, event, holdTime, queueName, time, totalTime, date, category, mainCategory) => {
         return new Promise((resolve, reject) => {
            var sql = "INSERT INTO call_log(id, user, callType, agent, callerID, callTime, event, holdTime, queueName, time, totalTime, date, category, mainCategory ) VALUES ('" + id + "', '" + user + "', '" + callType + "','" + agent + "','" + callerID + "','" + callTime + "','" + event + "','" + holdTime + "','" + queueName + "','" + time + "','" + totalTime + "', '" + date + "', '" + category + "', '" + mainCategory + "')";
            var param = [id, user, callType, agent, callerID, callTime, event, holdTime, queueName, time, totalTime, date, category, mainCategory];

            con.query(sql, param, (err, result) => {
                if (err) {
                    console.log(err);
                    resolve(false);
                } else {
                    resolve(result);
                    // console.log("Inserted");
                }
            });
        });

    },

    getCallLogData(user) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT * FROM call_log WHERE user ="' + user + '"';
            con.query(sql, user, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        // console.log("call_log");
                    }
                }
            })
        })
    },

    delete(type, i) {
        return new Promise((resolve, reject) => {
            var sql = 'DELETE FROM calldata WHERE id ="' + i + '"';
            var params = [type, i];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        console.log("deleted ID :" + i);
                    }
                }
            })
        })
    },

    login(type, username, password) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT username, password FROM calldata WHERE username ="' + username + '" AND password = "' + password + '"';
            var params = [type, username, password];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        console.log(username);
                    }
                }
            })
        })
    }

}

module.exports = data;