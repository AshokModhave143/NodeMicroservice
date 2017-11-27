
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
//var morgan = require('morgan');
//var restful = require('node-restful');
//var mongoose = restful.mongoose;

// Express
const app = express();
//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
//app.use(methodOverride());

//mongoose.connect("mongodb://localhost/api");

// Routes
//app.use('/api', require('./src/api'));
// var Resource = app.resource = restful.model('vacancies', mongoose.Schema({
//     title: String,
//     year: Number
// })).methods(['get','put','post']);

// Resource.register(app, '/api');

app.get('/api/checkVacancy',function(req, res){
    var str = "This is test GET sample"; 
    
    return res.json({
        speech: str,
        displayText: str,
        source: 'simpledemoservice'
    });
});
app.post('/api/saveVacancy',function(req, res){
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "There are no parameters";
    
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'simpledemoservice'
    });
});

// Start server
app.listen(3000);
console.log('API is running on port 3000...');