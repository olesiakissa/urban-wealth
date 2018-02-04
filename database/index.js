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

module.exports.insertProblem = function(){

};

module.exports.insertSolution = function(){

};

module.exports.insertEvent = function(){

};

module.exports.insertReview = function(){

};

module.exports.insertComment = function(){

};

module.exports.insertRate = function(){

};

module.exports.insertDistrict = function(){

};

module.exports.insertUser = function(){

};
