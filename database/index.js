const mongodb = require("mongodb");
const  config = require('../config.js');

var url = 'mongodb://'+config.user+':'+config.password+'@'+config.host+':'+config.port+'/'+config.db;

module.exports.connectToDb = function (){
     mongodb.connect(url, function (err, db) {
        if(!err) {
            console.log('connected');
        }
        else{
            console.log("error"+ err.message);
        }
    });
};