// global modules and setup
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();
const hbs = require("hbs");
app.set('views', __dirname + '/views');
app.set("view engine", "hbs");

// set partials
hbs.registerPartials(__dirname + "/views/partials");

// set static resources
app.use(express.static(path.join(__dirname, 'public')));

// routing 
app.get("/", function(request, response){
	response.render('home.hbs',{
		title: 'UrbanWealth'
	});
});

app.get("/district", function(request, response){
	response.render('district.hbs',{
		title: 'UrbanWealth'
	});
});

app.get("/event", function(request, response){
	response.render('event.hbs',{
		title: 'UrbanWealth'
	});
});

post.get("/problem", function(request, response){
	//todo problem
});

post.get("/solution", function(request, response){
	//todo solution
});

post.get("/review", function(request, response){
	//todo review
});

post.get("/event", function(request, response){
	//todo event
});

post.get("/comment", function(request, response){
	//todo comment
});

post.get("/subcategory", function(request, response){
	//todo subcategory
});

app.get("/stop", function(request, response){
	console.log(`Server stop listening ${server.address().address}:${server.address().port}`);
	console.log('Cause: The server has been shut down by the web request');
	process.exit();
	response.send('Server disabled');
});

var server = app.listen(3000, () => {
	console.log(`Server start listening ${server.address().address}:${server.address().port}`);
});