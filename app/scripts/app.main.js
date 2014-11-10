/*global require, Modernizr, Ember*/

(function(){
    'use strict';

    /**
     * 
     * loading class used for showing loading feedback when a call is made the movie API
     * 
     */
    function Loader(){
        this.$el = $('<div />', {
            css: {
                position: 'fixed',
                width: 200,
                height: 50,
                top: '50%',
                left: '50%',
                margin: '-25px 0 0 -100px',
                display: 'none'
            },
            text: 'loading results...'
        });
    }


    /**
     * show the loading element
     */
    Loader.prototype.show = function(){
        this.$el.appendTo('body').show();
    };


    /**
     * hide the loading element
     */
    Loader.prototype.hide = function(){
        this.$el.hide().remove();
    };


    // make a loader instance
    var loader = new Loader();


    // ember app instance
    var Moo = Ember.Application.create({
        LOG_TRANSITIONS: true,
        LOG_ACTIVE_GENERATION: true
    });


    // routes for the application
    Moo.Router.map(function() {

        // route for a movie title search
        this.resource('movies', {
            path: 'search/:title'
        });

        // route for a single movie detail by id
        this.resource('movie', {path:'movie/:idIMDB'});
    
    });


    // movie model object using a base ember object
    Moo.Movie = Ember.Object.extend({});


    // 
    Moo.MovieRoute = Ember.Route.extend({
        model: function(params){

            // make a calk to the movie api based on the idIMDB
            return Ember.$.ajax({
                url: 'http://www.myapifilms.com/imdb',
                data: {format: 'JSONP', idIMDB: params.idIMDB},
                dataType:  'jsonp'
            }).then(function(res){
               
               // hide the loader
                loader.hide();

                // return a movie model instance with results
                return Moo.Movie.create({
                    idIMDB: res.idIMDB,
                    plot: res.simplePlot,
                    poster: res.urlPoster,
                    writer: res.writers,
                    director: res.directors,
                    title: res.title
                });
            });

        },
        actions: {

            // fires when a movie title search is loading
            loading: function(){

                // show the loader
                loader.show();
            }
        }
    });


    Moo.MoviesRoute = Ember.Route.extend({
        model: function(params){
            return Ember.$.ajax({
                url: 'http://www.myapifilms.com/imdb',
                data: {title: params.title, format: 'JSONP'},
                dataType: 'jsonp'
            }).then(function(res){

                // hide the loader 
                loader.hide();

                return res;
            });

        },

        // fires when the route is loading the model data
        actions: {
            loading: function(transition, originRoute) {
               loader.show();

               return true;
            }
        }
    });


    /**
     * Application controller, mostly handles searches from the search field
     */
    Moo.ApplicationController = Ember.ObjectController.extend({
        searchTerms: '',
        appName: function() {
            var st = this.get('searchTerms');

            if (st) {
                return st + "???";
            }else{
                return "Mooveez";
            }
        }.property('searchTerms'),
        actions: {
            search: function(){
                this.transitionToRoute('movies', this.get('searchTerms'));
            }
        }
    });

}());


