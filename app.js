var app = require('./config/app_config.js');
var db = require('./config/db_config.js');

app.get('/', function(req,res){
    res.json({name: 'Debora Engelmann'});
});