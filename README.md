spotify# liri-node-app
LIRI is a Language Interpretation and Recognition Interface.

# Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives data in return.

# Overall Use
Use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in commands through Language vs Speech using the following commands:

concert-this

spotify-this-song

movie-this

do-what-it-says

# Technology Used
Github - file repo
VScode - code/text editor
Node.js

API(s):
Spotify
OMBD
Bands In Town

NPM packages:
Node-spotify-api
Axios
Moment
Dotenv

Required for use:
Node.js
Make new Github repo called liri-node-app and clone to user your computer.
Send requests using the axios package to the Bands in Town, Spotify and OMBD API's.

# What Each Command Does
LIRI searches Bands in Town for concerts, Spotify for songs, and OMBD for movies.
    
    1. node liri.js concert-this '<artist/band name here>'
       
       Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal.

            Name of the venue.

            Venue location.

            Date of the Event (using the format "MM/DD/YYYY").
   
    2. node liri.js spotify-this-song '<song name here>'
        
        Displays the following information about the selected song in your terminal/bash window.

            Artist(s)

            The song's name.

            A preview link of the song from Spotify.

            The album containing the song.

        If no song is provided, the program defaults to "The Sign" by Ace of Base.

    3. node liri.js movie-this '<movie name here>'

        This will output the following movie information to your terminal/bash window:

            * Title
            * Year movie was released
            * IMDB Rating
            * Rotten Tomatoes Rating
            * Country where movie was produced
            * Language(s)
            * Plot of the movie
            * Actors in the movie
        
        If the user does not enter a movie selection, the program outputs data for the movie 'Mr. Nobody.'

    4. node liri.js do-what-it-says

        Runs spotify-this-song for "I Want it That Way".

# Link for Video
Google Video
https://drive.google.com/file/d/1hoyya-P3h6cP5BnReB4R83V9bzrqUMzY/view



 


