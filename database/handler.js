
const generator = require('./generator');
const db = require('./index');
var amount = 10;

function gen(array, func) {
    for (let i = 0; array.length; i++) {
        func(array[i]);
    }
}

const dist = new Object(
    {
        id: 29, 
        name: 'name29', 
        svgpath: 'path29'
    }
);

const categor = new Object(
    {
        id: 1
    }
);

var test = null;
/*
db.get(db.allDistricts).then(res => 
    {
        test = res;
        console.log(test)
    }
);

db.get(db.allSubcategoriesOfCategory(categor)).then(res => 
    {
        test = res;
        console.log(test)
    }
);
*/
/*
db.getAllInfoSorted.then(res => 
    {
        test = res;
        console.log(test)
    }
);
*/
/*
// Works great
db.insertDistrict(dist)
.then(
    db.getAllDistricts.then(res => {
        test = res;
        console.log(test)
    })
);

// Works great
db.insert('district', dist)
.then(
    db.getAllDistricts.then(res => {
        test = res;
        console.log(test)
    })
);
*/

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