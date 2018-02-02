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

app.get("/stop", function(request, response){
	console.log(`Server stop listening ${server.address().address}:${server.address().port}`);
	console.log('Cause: The server has been shut down by the web request');
	process.exit();
	response.send('Server disabled');
});

var server = app.listen(3000, () => {
	console.log(`Server start listening ${server.address().address}:${server.address().port}`);
});