const fs = require("fs");
const path = "crud/data/id.json";
var dataSet;

// Receives Set and parses it to json
module.exports.save = function (data) {
    var json = JSON.stringify(data, null, 2);
    saveToFile(json);
};

// Returns Set from JSON that is stored in file
module.exports.read = function () {
    var json = getFromFile();
    var data = JSON.parse(json);
    return data;
};

// Writes JSON to file
function saveToFile(jsonData) {
    fs.writeFile(path, jsonData, function (err) {
        if (err) {
            return console.error(err);
        }
    });
}

// Gets JSON from file
function getFromFile() {
    return fs.readFileSync(path, 'utf8');
}