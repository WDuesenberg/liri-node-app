require("dotenv").config();
var request = require("request");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var inquirer = require("inquirer");

var userOption = process.argv[2];
var inputParameter = process.argv[3];
console.log(process.argv)


// console.log("init");
// console.log("concertThis");

function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What do yo want to do?",
            choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says", "quit"]
        }
    ]).then(function (answer) {
        console.log(answer)
    })
}


// function concertThis(artist) {
//     url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp",
//         axios.get("url").then(
//             function (response) {
//                 console.log("Name of the venue: " + response.data.venue);

//                 init();

//                 function spotifyThisSong() {
//                     console.log("spotifyThisSong");

//                     init();
//                 }
//                 function movieThis() {
//                     console.log("movieThis");
//                     init();
//                 }
//                 function doWhatItSays() {
//                     console.log("doWhatItSays");
//                     init();

//                 }
//             }
//         )}


                init();





