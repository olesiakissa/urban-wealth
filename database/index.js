const mongodb = require('mongodb').MongoClient;
//const assert = require('assert')
const config = require('./config.js');

//region CONNECT
const connDB = config.db;
var url = 'mongodb://' + config.user + ':' + config.password + '@' + config.host +
          ':' + config.port + '/?authMecanism=DEFAULT&authSource=' + config.db;
//          ':' + config.port + '/' + config.db;
//endregion
:
//region REFACTOR PART
// ToDo: Refactor all get and insert promises and make common funcs
// for each type, but still unable to pass object to GET like this
module.exports.insert = (collectionName, object) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection(collectionName).insertOne(object)
                        .then(() => resolve('INSERTED'));
                    conn.close();
               });
    });
};
//endregion

//region GET MODULES
module.exports.getAllDistricts = new Promise((resolve, reject) => {
    mongodb.connect(url)
           .then(conn => {
                conn.db(connDB).collection('district').find().toArray()
                    .then(res => resolve(res));
                conn.close();
           })
           .catch(function(err) {
                reject('GET_ERROR');
           });
});

module.exports.getAllSubcategoriesOfCategory = (category) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('subcategory').find({category_id: category.id}).toArray()
                        .then(res => resolve(res));
                    conn.close();
               })
               .catch(function(err) {
                    reject('GET_ERROR');
               });
    });
};

module.exports.getEventsByDistricts = (district) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('event').find({district_id: district.id}).toArray()
                        .then(res => resolve(res));
                    conn.close();
               })
               .catch(function(err) {
                    reject('GET_ERROR');
               });
    });
};

module.exports.getAllCommentsOfEvent = (event) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('comment').find({event_id: event.id}).toArray()
                        .then(res => resolve(res));
                    conn.close();
               })
               .catch(function(err) {
                    reject('GET_ERROR');
               });
    });
};

module.exports.getRatingsOfDistrictByDate = (district, timeLong) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('rate').find(
                        {
                            district_id: district.id, 
                            date: {$gt: timeLong}
                        }).toArray()
                        .then(res => resolve(res));
                    conn.close();
                })
                .catch(function(err) {
                     reject('GET_ERROR');
                });
    });
};

// ToDo: Correct query settings
module.exports.getAllInfoSorted = new Promise((resolve, reject) => {
    mongodb.connect(url)
           .then(conn => {
                conn.db(connDB).collection('problem').aggregate([
                    { $lookup: {
                            from: 'solution',
                            localField: 'id',
                            foreignField: 'problem_id',
                            as: 'solution'
                      }
                    }, 
                    { $lookup: {
                            from: 'district',
                            localField: 'district_id',
                            foreignField: 'id',
                            as: 'district'
                      }
                    }, 
                    { $lookup: {
                            from: 'review',
                            localField: 'district_id',
                            foreignField: 'district_id',
                            as: 'review'
                      }
                    },
                    { $lookup: {
                            from: 'rate',
                            localField: 'district_id',
                            foreignField: 'district_id',
                            as: 'rate'
                      }
                    }, 
                    { $unwind: {
                      		path: '$review', 
                      		preserveNullAndEmptyArrays: true
                      }
                    },
                    { $unwind: {
                      		path: '$rate', 
                      		preserveNullAndEmptyArrays: true
                      }
                    },
                    // If $push array, then sort -1
                    // If $addToSet array, then sort 1
                    { $sort: { 'review.date': 1 }},
                    { $sort: { 'rate.date': 1 }}, 
                    { $group: { 
                      		_id: '$_id',
                      		id: {$first: '$id'},
                      		title: {$first: '$title'},
                      		text: {$first: '$text'},
                      		date: {$first: '$date'},
                      		category_id: {$first: '$category_id'},
                      		subcategory_id: {$first: '$subcategory_id'},
                      		author: {$first: '$author'},
                      		media: {$first: '$media'},
                      		district_id: {$first: '$district_id'},
                      		solution: {$first: '$solution'},
                      		district: {$first: '$district'},
                      		review: {$addToSet: '$review'},
                      		rate: {$addToSet: '$rate'}
                      }
                    },
                    // Global sort of problems result 
                    { $sort: { 'date': -1 }}
                ]).toArray()
                    .then(res => resolve(res));
                conn.close();
           })
           .catch(function(err) {
                reject('GET_ERROR');
           });
});
//endregion

//region INSERT MODULES
module.exports.insertDistrict = (district) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('district').insertOne(
                        {
                            id: district.id, 
                            name: district.name, 
                            svgpath: district.svgpath
                        })
                        .then(() => resolve('INSERTED'));
                    conn.close();
               })
               .catch(function(err) {
                    reject('INSERT_ERROR');
               });
    });
};

module.exports.insertProblem = (problem) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('problem').insertOne(
                        {
                            id: problem.id,
                            title: problem.title,
                            text: problem.text,
                            date: problem.date,
                            category_id: problem.category_id,
                            subcategory_id: problem.subcategory_id,
                            author: problem.author,
                            district_id: problem.district_id,
                            media: problem.media
                        })
                        .then(() => resolve('INSERTED'));
                    conn.close();
               })
               .catch(function(err) {
                    reject('INSERT_ERROR');
               });
    });
};

module.exports.insertSolution = (solution) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('solution').insertOne(
                        {
                            id: solution.id,
                            title: solution.title,
                            text: solution.text,
                            problem_id: solution.problem_id,
                            author: solution.author,
                            media: solution.media
                        })
                        .then(() => resolve('INSERTED'));
                    conn.close();
               })
               .catch(function(err) {
                    reject('INSERT_ERROR');
               });
    });
};

module.exports.insertEvent = (event) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('event').insertOne(
                        {
                            id: event.id,
                            title: event.title,
                            author: event.author,
                            text: event.text,
                            date: event.date,
                            district_id: event.district_id,
                            attenders: event.attenders
                        })
                        .then(() => resolve('INSERTED'));
                    conn.close();
               })
               .catch(function(err) {
                    reject('INSERT_ERROR');
               });
    });
};

module.exports.insertReview = (review) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('review').insertOne(
                        {
                            id: review.id, 
                            title: review.title, 
                            text: review.text, 
                            date: review.date
                        })
                        .then(() => resolve('INSERTED'));
                    conn.close();
               })
               .catch(function(err) {
                    reject('INSERT_ERROR');
               });
    });
};

module.exports.insertComment = (comment) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('comment').insertOne(
                        {
                            id: comment.id, 
                            author: comment.author, 
                            text: comment.text, 
                            date: comment.date, 
                            event_id: comment.event_id
                        })
                        .then(() => resolve('INSERTED'));
                    conn.close();
               })
               .catch(function(err) {
                    reject('INSERT_ERROR');
               });
    });
};

module.exports.insertRate = (rate) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('rate').insertOne(
                        {
                            id: rate.id,
                            eval: rate.eval,
                            eval_ecology: rate.eval_ecology,
                            eval_administration: rate.eval_administration,
                            eval_infrastructure: rate.eval_infrastructure,
                            eval_criminal: rate.eval_criminal,
                            date: rate.date,
                            district_id: rate.district_id,
                            review_id: rate.review_id
                        })
                        .then(() => resolve('INSERTED'));
                    conn.close();
               })
               .catch(function(err) {
                    reject('INSERT_ERROR');
               });
    });
};

module.exports.insertUser = function (user) {
    return new Promise((resolve, reject) => {
        mongodb.connect(url)
               .then(conn => {
                    conn.db(connDB).collection('user').insertOne(
                        {
                            id: user.id, 
                            full_name: user.full_name, 
                            email: user.email, 
                            password: user.password
                        })
                        .then(() => resolve('INSERTED'));
                    conn.close();
               })
               .catch(function(err) {
                    reject('INSERT_ERROR');
               });
    });
};
//endregion