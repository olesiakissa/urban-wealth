var faker = require('faker');

function generateUsers(amount) {
    var users = [];
    for (let i = 0; i < amount; i++) {
        users.push({
            'id': i+1,
            'full_name': `${faker.fake("{{name.lastName}} {{name.firstName}}")}`,
            'email': `${faker.fake("{{internet.email}}")}`,
            'password': `${faker.fake("{{internet.password}}")}`
        });
    }
    return users;
}

function generateComments(amount) {
    var comments = [];
    for (let i = 0; i < amount; i++) {
        comments.push({
            'id': i+1,
            'author': `${faker.fake("{{name.lastName}} {{name.firstName}}")}`,
            'text': `${faker.fake("{{lorem.text}}")}`,
            'date': new Date(`${faker.fake("{{date.past}}")}`).getTime()
        });
    }
    return comments;
}

function generateReviews(amount) {
    var reviews = [];
    for (let i = 0; i < amount; i++) {
        reviews.push({
            'id': i+1,
            'title': `${faker.fake("{{lorem.sentence}}")}`,
            'text': `${faker.fake("{{lorem.text}}")}`,
            'date': new Date(`${faker.fake("{{date.past}}")}`).getTime()
        });
    }
    return reviews;
}

function generateProblems(amount) {
    var problems = [];
    //id values for categories
    var catmin = 1, catmax = 4;
    //id values for subcategories
    var submin = 1, submax = 12;

    for (let i = 0; i < amount; i++) {
        problems.push({
            'id': i+1,
            'title': `${faker.fake("{{lorem.sentence}}")}`,
            'text': `${faker.fake("{{lorem.text}}")}`,
            'date': new Date(`${faker.fake("{{date.past}}")}`).getTime(),
            'category_id': (Math.floor(Math.random() * (catmax - catmin + 1)) + catmin),
            'subcategory_id': (Math.floor(Math.random() * (submax - submin + 1)) + submin),
        });
    }
    return problems;
}

function generateSolutions(amount, problems) {
    var solutions = [];
    var min = 1, max = problems.length - 1;

    for (let i = 0; i < amount; i++) {
        solutions.push({
            'id': i+1,
            'title': `${faker.fake("{{lorem.sentence}}")}`,
            'text': `${faker.fake("{{lorem.text}}")}`,
            'date': new Date(`${faker.fake("{{date.past}}")}`).getTime(),
            'problem_id': (Math.floor(Math.random() * (max - min + 1)) + min),
            'author': `${faker.fake("{{name.lastName}} {{name.firstName}}")}`,
        });
    }
    return solutions;
}

function generateRates(amount, reviews) {
    var rates = [];
    var min = 1, evalMax = 5, districtMax = 10, reviewsMax = reviews.length - 1;

    for (let i = 0; i < amount; i++) {
        rates.push({
            'id': i+1,
            'eval_ecology': parseFloat(Math.random() * (evalMax - min + 1) + min).toFixed(3),
            'eval_administration': parseFloat(Math.random() * (evalMax - min + 1) + min).toFixed(3),
            'eval_infrastructure': parseFloat(Math.random() * (evalMax - min + 1) + min).toFixed(3),
            'eval_criminal': parseFloat(Math.random() * (evalMax - min + 1) + min).toFixed(3),
            'date': new Date(`${faker.fake("{{date.past}}")}`).getTime(),
            'district_id': (Math.floor(Math.random() * (districtMax - min + 1)) + min),
            'review_id': (Math.floor(Math.random() * (reviewsMax - min + 1)) + min),
        });
    }
    return rates;
}

function generateEvents(amount) {
    var events = [];
    for (let i = 0; i < amount; i++) {
        events.push({
            'id': i+1,
            'title': `${faker.fake("{{lorem.sentence}}")}`,
            'author': `${faker.fake("{{name.lastName}} {{name.firstName}}")}`,
            'text': `${faker.fake("{{lorem.text}}")}`,
            'date': new Date(`${faker.fake("{{date.past}}")}`).getTime()
        });
    }
    return events;
}
