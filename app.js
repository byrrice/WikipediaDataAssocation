var request = require('request');
var cheerio = require('cheerio');
var searchTerm = 'James_Blake_(tennis)';
var url = "https://en.wikipedia.org/w/index.php?search=" + searchTerm;

request(url, function(err, resp, body){
    var ar1 = []
    var ar2 = []
    $ = cheerio.load(body);
    links = $('p').find('a');
    $(links).each(function(i, link){
        ar1.push($(link).text());
        ar2.push($(link).attr('href'));
        // console.log($(link).text());
        // console.log($(link).attr('href'));
        //have to run through and delete all arrays associated with number or hashtag
    });
});
