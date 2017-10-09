var express = require('express');
var app = express();
var fs=readFile('./file.json')
//var people = require('./file.json');
var people =     [{name1:'yv'},
		          {name2:'hari'},
				  {name3:'manohar'},
				  {name4:'mano'},
				  {name5:'vignesh'},
				  {name6:'mani'},
				  {name7:'sony'},
				  {name8:'santhosh'},
				  {name9:'vinnni'},
				  {name10:'mahesh'},
				  {name11:'mani'},
				  {name12:'sony'},
				  {name13:'santhosh'},
				  {name14:'vinnni'},
				  {name15:'mahesh'},
				  
				  ]

// Consider checking that people is an array and other validation checks.

app.get('/api/people', function (req, res) {
    var offset = parseInt(req.query.offset, 5);
    var limit = parseInt(req.query.limit, 5);

    
    res.json(people.splice(offset, offset+limit));
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});