require("dotenv").config();
// Add the code required to import the .keys.js file and store it in a variable.
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,    
});
// var defaultSong = require("The Sign");
var defaultMovie = "Mr Nobody";
// var spotify = new Spotify(keys.spotify);


/**
 * Name of the venue
 * Venue location
 * Date of the Event (use moment to format this as "MM/DD/YYYY")
 */
var action = process.argv[2];
var value = process.argv.slice(3).join(" ");
console.log(value);
// console.log(process.argv)

switch (action) {
    case "concert-this":
        getBands(value)
        break;
    case "spotify-this-song":
        // If user has not specified a song, use default
        // if (value === "") {
        //  value = defaultSong;    
        //    }
        getSongs(value)
        break;
    case "movie-this":
        // If user has not specified a movie, use default
        if (value == "") {
            value = defaultMovie;
        }
        getMovies(value)
        break;
    case "do-what-it-says":
        doWhatItSays()
        break;
        default:
        break;
}
function getBands(artist) {
    // var artist = value;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log("Name of the venue: ", response.data[0].venue.name);
            console.log("Venue location: ", response.data[0].venue.location);
            var eventDate = moment(response.data[0].datetime).format("MM/DD/YYYY");
            console.log("Date of the Event:", eventDate);
        })    
        .catch(function (error) {
            console.log(error);
        });
    }

function getSongs(songName) {
    // var songName = value;

    // If user has not specified a song, default to "The Sign" by Ace of Bass
    if (songName === "") {
        songName = "I saw the Sign";
    }

    spotify
        .search({ type: 'track', query: songName })
        .then(function (data) {
        // console.log(data);
        // if (err) {
        //     return console.log('Error occurred: ' + err);
        // }
        // else {
        //      console.log("Not right now. Later?")
        //      console.log(JSON.stringify(data));
        //      The song's name
        //Artist(s)
        console.log(data)

        console.log("Artists: ", data.tracks.items[0].album.artists[0].name)
        // A preview link of the song from Spotify
        console.log("Preview Link: ", data.tracks.items[0].preview_url)
        // The album that the song is from
        console.log("Album Name: ", data.tracks.items[0].album.name)    
        })
        .catch(function (error) {
            console.log(error);
        });

    }

function getMovies(movieName) {
    // var movieName = value;
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=c95cf74e&t=" + movieName)
        .then(function (data) {
            // console.log(data.data);
            var results = `
            Title of the movie: ${data.data.Title}
            Year the movie came out: ${data.data.Year}
            IMBD Rating of the movie: ${data.data.Rated}
            Rotten Tomatoes Rating of the movie: ${data.data.Ratings[1].Value}
            Countrywhere the movie was produced: ${data.data.Country}
            Language of the movie: ${data.data.Language}
            Plot of the movie: ${data.data.Plot}
            Actors in the movie: ${data.data.Actors}`;
            console.log(results)
        })
        .catch(function (err) {
            console.log(err);
        });
        // Response if the user does not type in a movie title
        if (movieName === "Mr. Nobody") {
            console.log("---------------");
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");
        };
    }

    function doWhatItSays() {
        fs.readFile("random.txt", "utf8", function (err, data) {
            data = data.split(",");
            var action = data[0]
            var value = data[1]
            // getSongs(value)
            switch (action) {
                case "concert-this":
                    getBands(value)
                    break;
                case "spotify-this-song":
                    getSongs(value)
                    break;
                case "movie-this":
                    getMovies(value)
                    break;
                default:
                    break;
                }
            });
        }
// imports.spotify
// Issues with certain property(s) not being defined.
// appears as though packages are loaded but havent been able to trouble shoot the issues :(
 
            





               





