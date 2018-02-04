// global modules and setup
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();
const hbs = require("hbs");
const analysis = require("./analysis");
var database = require("./database");
const crud = require("./crud");
var dateFormat = require('dateformat');
app.set('views', __dirname + '/views');
app.set("view engine", "hbs");
dateFormat.i18n = {
    dayNames: [
        'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб',
        'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
    ],
    monthNames: [
        'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
};

// set partials
hbs.registerPartials(__dirname + "/views/partials");

// set static resources
app.use(express.static(path.join(__dirname, 'public')));

// routing 
app.get("/", function (request, response) {
    database.connectToDb();
    response.render('home.hbs', {
        title: 'UrbanWealth'
    });
});

app.post("/map", function (request, response) {
	response.json(
	[ 	3.4,
		2.7,
		3.2,
		4.3,
		4.5,
		3.5,
		2.3,
		1.6,
		2.2,
		2.8]
	);
});

app.get("/district/:name", function(request, response){
	response.render('district.hbs',{
		title: 'UrbanWealth',
		name: request.params["name"]
	});
});

app.post("/graphic", function (request, response) {
    response.json(
        {
            keys: ['01.12.2017', '01.01.2018', '01.02.2018'],
            gradation: [0, 1, 2, 3, 4, 5],
            graphics: [
                {
                    name: 'Экология',
                    color: '#16a818',
                    type: 'line',
                    points:
                        [
                            {
                                value: 1.2
                            },
                            {
                                value: 1.5
                            },
                            {
                                value: 1.3
                            }
                        ]
                },
                {
                    name: 'Преступность',
                    color: '#ff0000',
                    type: 'line',
                    points:
                        [
                            {
                                value: 3.8
                            },
                            {
                                value: 3.3
                            },
                            {
                                value: 3.5
                            }
                        ]
                },
                {
                    name: 'Администрация',
                    color: '#e8ae0c',
                    type: 'line',
                    points:
                        [
                            {
                                value: 2.8
                            },
                            {
                                value: 3.0
                            },
                            {
                                value: 3.0
                            }
                        ]
                },
				{
                    name: 'Инфраструкрута',
                    color: '#4ca2a8',
                    type: 'line',
                    points:
                        [
                            {
                                value: 3.1
                            },
                            {
                                value: 3.5
                            },
                            {
                                value: 4.5
                            }
                        ]
                },
            ]
        }
    );
});

app.get("/event", function (request, response) {
    response.render('event.hbs', {
        title: 'UrbanWealth'
    });
});

app.post("/create-problem", jsonParser, function (request, response) {
    response.render('partials/problem.hbs', {
        problemTitle: request.body.title,
        problemText: request.body.description
    });
});

app.post("/create-solution", jsonParser, function (request, response) {
    response.render('partials/solution.hbs', {
        solutionTitle: request.body.title,
        solutionText: request.body.text
    });
});

app.post("/create-review", jsonParser, function (request, response) {
    response.render('partials/review.hbs', {
        reviewTitle: request.body.title,
        reviewText: request.body.text
    });
});

app.post("/create-event", jsonParser, function (request, response) {
	console.log(request.body);
    response.render('partials/event.hbs', {
        eventTitle: request.body.title,
        eventDescription: request.body.description,
        eventAuthor: request.body.author
    });
});

app.post("/comment", jsonParser, function (request, response) {
    var date = dateFormat(new Date(Date.now()), "mmmm dd, yyyy, HH:MM");
    response.render('partials/comment.hbs', {
        authorName: 'Test',
        commentTime: date,
        commentMessage: request.body.comment
    });
});

app.post("/subcategory", function (request, response) {
    //todo subcategory
});

app.get("/stop", function (request, response) {
    console.log(`Server stop listening ${server.address().address}:${server.address().port}`);
    console.log('Cause: The server has been shut down by the web request');
    process.exit();
    response.send('Server disabled');
});

var server = app.listen(3000, () => {
    console.log(`Server start listening ${server.address().address}:${server.address().port}`);
});