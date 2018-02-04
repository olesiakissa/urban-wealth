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

module.exports.insertUser = function(user){
	db.user.insert(
		{id: user.id, full_name: user.full_name, email:user.full_name, password:user.full_name }
	);
};


module.export.getAllSubcategoriesOfCategory = function(category){
    return = db.subcategory.find(
        {category_id: category.id}
    );
};

module.export.getEventsByDistricts = function(district){
    return = db.event.find(
        {district_id: district.id}
    );
};

module.export.getAllCommentsOfEvent = function(event){
    return = db.comment.find(
        {event_id: event.id}
    );
};

module.export.getAllDistricts = function(){
    return = db.district.find();
};

module.export.getRatingsOfDistrictByDate = function(district, timeLong){
    return = db.comment.find(
        {district_id: district.id, date: {$gt: timeLong}}
    );
};
//module.exports.getAllInfoSorted = function(district, problem, )

module.exports.insertDistrict = function(user){
	db.user.insert(
		{id: 1, name: 'Svyatoshyn', svgpath: 'M118,1 L209,81 L209,122 L258,154 L259,226 L285,228 L286,241 L256,264 L282,320 L306,348 L306,362 L281,381 L225,338 L198,292 L196,262 L181,254 L131,265 L72,247 L63,289 L55,301 L31,287 L12,306 L0,287 L18,265 L2,232 L36,193 L24,183 L33,152 L44,150 L59,110 L43,90 L60,63 L68,64 L93,52 L97,33 L116,32 L117,0 L118,1 Z'},
		{id: 2, name: 'Obolonsky', svgpath: 'M0,83 L109,180 L163,163 L255,156 L249,178 L253,231 L287,257 L299,258 L321,289 L331,268 L393,268 L383,253 L409,243 L393,203 L392,145 L368,108 L341,104 L325,81 L324,57 L311,56 L307,44 L291,44 L290,35 L274,34 L274,11 L129,0 L127,36 L80,32 L26,40 L55,55 L55,62 L77,69 L78,76 L62,76 L56,102 L28,77 L2,82 Z'},
		{id: 3, name: 'Podolsky', svgpath: 'M1,-168 L56,-185 L148,-193 L142,-168 L146,-117 L180,-91 L193,-90 L214,-60 L223,-80 L285,-80 L289,-75 L265,-34 L270,-10 L259,0 L92,-51 L50,-77 L49,-97 L0,-128 L1,-168 L1,-169 L2,-169 Z'},
		{id: 4, name: 'Shevchenkovsky', svgpath: 'M1,-109 L44,-82 L211,-31 L195,0 L172,-6 L160,-1 L132,-22 L113,-15 L112,-31 L29,-54 L1,-57 L0,-110 L1,-109 L1,-108 L2,-107 L1,-108 L2,-109 L1,-110 L2,-109 L1,-110 Z'},
		{id: 5, name: 'Solomensky', svgpath: 'M26,-47 L52,-65 L52,-80 L25,-109 L0,-163 L31,-187 L30,-199 L114,-176 L116,-160 L134,-168 L180,-129 L187,-112 L167,-93 L182,-71 L154,-71 L140,-44 L123,-42 L124,-26 L107,-30 L92,-6 L83,-13 L70,0 L26,-47 L27,-48 L28,-47 Z'},
		{id: 6, name: 'Goloseevsky', svgpath: 'M110,5 L128,23 L135,41 L114,59 L130,81 L102,82 L89,107 L72,110 L73,127 L56,123 L40,145 L30,139 L0,173 L11,188 L11,206 L33,215 L43,198 L78,216 L66,228 L69,267 L84,267 L90,260 L102,273 L89,286 L100,298 L122,287 L140,306 L161,312 L163,318 L157,348 L197,389 L339,370 L290,266 L242,192 L250,137 L274,102 L257,67 L227,79 L218,101 L192,102 L159,91 L156,71 L144,39 L144,7 L122,0 L110,6 L111,7 L111,6 Z'},
		{id: 7, name: 'Pechersky', svgpath: 'M27,0 L16,10 L0,42 L0,76 L12,108 L15,125 L49,136 L73,135 L83,113 L112,101 L113,78 L95,69 L77,33 L36,0 L27,0 L19,5 L16,10 L16,11 L16,10 L15,10 L15,11 L16,10 L16,11 Z'},
		{id: 8, name: 'Desnyansky', svgpath: 'M17,235 L0,192 L0,157 L9,165 L28,166 L32,182 L47,182 L47,167 L29,141 L33,124 L144,139 L217,139 L236,101 L290,73 L291,90 L317,91 L313,36 L331,16 L324,0 L381,22 L405,22 L410,42 L429,38 L434,30 L459,67 L457,151 L401,176 L368,176 L368,188 L362,189 L354,178 L346,188 L359,200 L330,227 L321,231 L323,246 L183,306 L185,327 L196,334 L195,346 L175,355 L164,341 L144,347 L148,333 L133,304 L115,292 L108,275 L115,258 L108,234 L17,235 Z'},
		{id: 9, name: 'Dneprovsky', svgpath: 'M344,12 L202,73 L206,93 L217,99 L215,112 L196,120 L185,107 L165,113 L169,99 L153,69 L136,59 L129,41 L136,24 L129,0 L37,1 L12,10 L23,26 L24,30 L0,73 L5,96 L16,97 L56,129 L75,166 L94,175 L91,198 L288,129 L359,58 L352,46 L358,27 L355,13 L345,12 L344,12 L345,12 Z'},
		{id: 10, name: 'Darnytsky', svgpath: 'M291,3 L272,0 L212,62 L15,130 L32,165 L7,202 L0,254 L48,329 L48,299 L67,300 L49,271 L104,264 L107,283 L150,272 L149,287 L191,308 L216,285 L202,258 L215,255 L213,230 L224,220 L267,253 L285,247 L317,252 L304,225 L320,224 L325,217 L315,199 L329,189 L423,214 L431,138 L350,108 L320,79 L321,62 L265,31 L291,22 L291,2 L290,2 Z'},
	);
};
>>>>>>> b8ff9a0fd0da52a9df42eb3f337fc429e7bda75f
