

var express = require("express"),
    app = express(),
    config = require('./config/development'),
    routes = require('./route'),
    router = express.Router();
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    smiliesController = require("./server_side/controller/api/smiliesServer.js");

mongoose.connect('mongodb://'+config.db.mongo.host+'/'+ config.db.mongo.db_name);


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-token');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    // Request methods you wish to allow
    /*res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);*/
    // Pass to next layer of middleware
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());


routes.register(router);
 app.use('/',router);
// app.post('/api/getSmiley',smiliesController.getSmiley);
app.listen(5500,function(){
    console.log("project is working on port 5000")
})
