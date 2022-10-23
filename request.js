const request = require("request");

request.get('https://www.scrapethissite.com/pages/simple/', function(err, res, body) {  
   
    console.log(body)
});
