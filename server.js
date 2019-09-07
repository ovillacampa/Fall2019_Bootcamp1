var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

var listingData, server;

function readJSONFile(filePath, cb) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) return cb(err);
        listingData = JSON.parse(data);
        //console.log(listingData);
        return cb(null, listingData);
    });
}

readJSONFile('listings.json', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(listingData);
})

server = http.createServer(function (request, response) {
    if (request.url === '/listings') {
        //code to read json file here
        console.log(listingData);
        response.end(JSON.stringify(listingData));
    }
    else {
        response.statusCode = 404;
        response.end('Bad gateway error');
    }
   
})

server.listen(8080);