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

module.exports.insertProblem = function(prob){
	db.problem.insert(
		{ id: prob.id, title: prob.title, text: prob.text, date: prob.date, category_id: prob.category_id, subcategory_id: prob.subcategory_id, author: prob.author, district_id: prob.district_id, media: ['2.png']}
	)
};

module.exports.insertSolution = function(solut){
	db.solution.insert(  
         { id: solut.id, title: solut.title, text: solut.text, problem_id: solut.problem_id, author: solut.author, media: ['1.png'] }
	);
};

module.exports.insertEvent = function(event){
	db.event.insert(
		{id: event.id, title: event.title, author: event.author, text: event.text, date: event.date, district_id: event.district_id, attenders: event.attenders}
	);
};

module.exports.insertReview = function(rev){
	db.review.insert(
		{id: rev.id, title: rev.title, text: rev.text, date: rev.date}
	);
};

module.exports.insertComment = function(comm){
	db.comment.insert(
         {id: comm.id, author: comm.author, text: comm.text, date: comm.date, event_id: comm.event_id }
	);
};

module.exports.insertRate = function(rate){
	db.rate.insert(
		{ id: rate.id, eval: rate.eval, eval_ecology: rate.eval_ecology, rate.eval_administration: rate.eval_administration, eval_infrastructure: rate.eval_infrastructure, eval_criminal: rate.eval_criminal, date: rate.date, district_id: rate.district_id, review_id: rate.review_id }
	)
};

module.exports.insertDistrict = function(dist){
	db.district.insert(
		{ id: dist.id, name: dist.name, svgpath: dist.svgpath }
	);
};

module.exports.insertUser = function(user){
	db.user.insert(
		{id: user.id, full_name: user.full_name, email:user.full_name, password:user.full_name }
	);
};
