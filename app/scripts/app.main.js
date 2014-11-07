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

}());


