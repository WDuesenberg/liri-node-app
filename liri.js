require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var inquirer = require("inquirer");
var keys = require("./keys.js");


console.log("init");
console.log("concertThis");

function init() {
    inquirer.prompt([
        {
            type:"list",
            name:"userChoice",
            message:"What do yo want to do?",
            choices:["concert-this", "spotify-this-song", "movie-this", "do-what-it-says", "quit"] 
        }
    ]).then(function (answer){
        console.log(answer)
    });
}
        

function concertThis(artist) {
    url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp",
    axios.get("url").then(
        function(response) {
            console.log("Name of the venue:" + response.data.Venue);
        }
    ); 
    init();            
}
    
    
function spotifyThisSong() {
    var spotify = new Spotify(keys.spotify);

    console.log("spotifyThisSong");
    init();    
}
function movieThis() {
    console.log("movieThis");
    init();
}
function doWhatItSays() {
    console.log("doWhatItSays");
    init();

}
init();
// http://www.omdbapi.com/?i=tt3896198&apikey=c95cf74e
