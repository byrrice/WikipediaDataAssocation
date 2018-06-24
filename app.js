var request = require('request');
var cheerio = require('cheerio');
<<<<<<< HEAD
// var searchTerm = 'James_Blake_(tennis)';
// var url = "https://en.wikipedia.org/w/index.php?search=" + searchTerm;
var data;
var url = process.argv[2];
var stringlength = process.argv[3];

=======
var searchTerm = 'James_Blake_(tennis)';
var url = "https://en.wikipedia.org/w/index.php?search=" + searchTerm;
var data;


>>>>>>> 3b7892aa97ac29cfff420a619d3c832dfd6c950b
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
<<<<<<< HEAD
                        if ($(link).text().length == stringlength){
                            ar1.push($(link).text());
                            ar2.push($(link).attr('href'));
                        }
=======
                        ar1.push($(link).text());
                        ar2.push($(link).attr('href'));
>>>>>>> 3b7892aa97ac29cfff420a619d3c832dfd6c950b
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
<<<<<<< HEAD
    console.log(data[0]);
});


=======
    return data;
});




      
>>>>>>> 3b7892aa97ac29cfff420a619d3c832dfd6c950b
