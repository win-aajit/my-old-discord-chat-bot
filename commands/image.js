const Discord = require("discord.js");
const cheerio = require('cheerio'); /* Used to extract html content, based on jQuery || install with npm install cheerio */
const request = require('request'); /* Used to make requests to URLs and fetch response  || install with npm install request */
exports.execute = function(args,msg,bot){
function image(msg){
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + args[0],   
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    }
    
    function reqfunc(error, response, responseBody) {
        if (error) {
            //handle error 
            return;
        }
 
 
        a = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
         // In this search engine they use ".image a.link" as their css selector for image links
        var links = a(".image a.link");
        
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
        if (!urls.length) {
           //if array is empty, handle no results
            return;
        }

        const imageEmbed = new Discord.RichEmbed()
        .setTitle("'" + args[0] + "'")
        .setImage(urls[0])
        .setColor(0x00d8ff)
        msg.channel.sendEmbed(imageEmbed);
    }
 
 
    request(options, reqfunc)

}



     image(msg);

}