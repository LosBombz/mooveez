/*global require, Modernizr, Ember*/

/*
* This file is considered the main application bootstrap. For simple projects this file
* could be all you need for site functionality. For more than very basic js sites give minion.js a try:
* https://bitbucket.org/genuine/minion
*
* or in the commandline using bower:
* bower install git@bitbucket.org:genuine/minion.git --save-dev
 */

(function(){
    'use strict';

    // require.config({
    //     shim: {
    //         /* shim non AMD dependencies here */
    //     },
    //     paths: {

    //         // libraries
    //         jquery: 'bower_components/jquery/jquery',
    //         backbone: 'bower_components/backbone/backbone',
    //         underscore: 'bower_components/underscore/underscore',
    //         text: 'bower_components/requirejs-text/text'

    //     }
    // });

    // require(['jquery', 'underscore'], function($, _) {

    //     $(function(){

    //         /*
    //         Dom Ready code goes in here
    //          */

    //     });
    // });
    // 
    // 
    // MOOVEES
    // Project Plan:
    // 
    // 1. a search box that initiates a service call to http://www.myapifilms.com
    // 2. a model that gets results from the search
    // 3. renders a table with title, year, director(s)
    // 4. filter table by any column
    // 5. no more than 20 per page
    // 6. pagination that advances through results (collection)
    // 7. detail view
    // 
    // models: movie model
    // collectionmodel: movies collection
    // views: serch/table view, movie detail view
    // routes: index, detail:movie_id
    //  
    
    var Moo = Ember.Application.create();

    // Movie Model

    Moo.Router.map(function() {
        // this.resource('todos', { path: '/' });
        this.route('movie');
    
    });

    Moo.MovieRoute = Ember.Route.extend({
        model: function(){
            return {
                    "Title":"Star Wars: Episode IV - A New Hope",
                    "Year":"1977",
                    "Rated":"PG",
                    "Released":"25 May 1977",
                    "Runtime":"121 min",
                    "Genre":"Action, Adventure, Fantasy",
                    "Director":"George Lucas",
                    "Writer":"George Lucas",
                    "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
                    "Plot":"A young boy from Tatooine sets out on an adventure with an old Jedi named Obi-Wan Kenobi as his mentor to save Princess Leia from the ruthless Darth Vader and Destroy the Death Star built by the Empire which has the power to destroy the entire galaxy.",
                    "Language":"English",
                    "Country":"USA",
                    "Awards":"Won 6 Oscars. Another 38 wins & 26 nominations.",
                    "Poster":"http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg",
                    "Metascore":"91",
                    "imdbRating":"8.7",
                    "imdbVotes":"683,488",
                    "imdbID":"tt0076759",
                    "Type":"movie",
                    "Response":"True"
                };

        }
    });

}());


