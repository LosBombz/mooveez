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
    
    var App = Ember.Application.create();

    App.Router.map(function() {
        // this.resource('todos', { path: '/' });
    
    });

}());


