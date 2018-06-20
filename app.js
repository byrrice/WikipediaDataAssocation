var request = require('request');
var cheerio = require('cheerio');
var searchTerm = 'James_Blake_(tennis)';
var url = "https://en.wikipedia.org/w/index.php?search=" + searchTerm;
var data;


function getData(callback){
    request(url, function(err, resp, body){
        if(err){ return callback(err) };
        if(!err){
            var ar1 = []
            var ar2 = []
            $ = cheerio.load(body);
            links = $('a');
            $(links).each(function(i, link){
                if ($(link).text().length > 0 && typeof($(link).attr('href')) != "undefined"){
                    if ($(link).attr('href').startsWith('/wiki')){
                        ar1.push($(link).text());
                        ar2.push($(link).attr('href'));
                    }
                }
            });
            var results = [ar1, ar2];
            callback(null, results);
        }
    });
}



getData(function(err, results){
    if (typeof(err) != null){
        data = results;
    }
    else{
        data = err;
    }
    return data;
});




      
