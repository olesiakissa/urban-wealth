// Can't see faker module in generator
//const generator = require('./generator');
const db = require('./index');
var amount = 10;
//var connect = db.connectToDb();


function gen(array, func) {
    for (let i = 0; array.length; i++) {
        func(array[i]);
    }
}

// Doesn't work
db.executeFunc(db.findAllDistricts);

/*
var users = generator.generateUsers(amount);
var reviews = generator.generateReviews(amount);
var problems = generator.generateProblems(amount);
var events = generator.generateEvents(amount);
var comments = generator.generateComments(amount, events);
var rates = generator.generateRates(amount, reviews);
var solutions = generator.generateSolutions(amount, problems);

gen(users, db.insertUser);
gen(reviews, db.insertReview);
gen(problems, db.insertProblem);
gen(events, db.insertEvent);
gen(comments, db.insertComment);
gen(solutions, db.insertSolution);
gen(rates, db.insertRate);
*/