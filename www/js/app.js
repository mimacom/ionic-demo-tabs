// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ionicDemoTabs', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.css', {
                url: '/css',
                views: {
                    'tab-css': {
                        templateUrl: 'templates/tab-css.html',
                        controller: 'CssCtrl'
                    }
                }
            })

            .state('tab.buttons', {
                url: '/buttons',
                views: {
                    'tab-css': {
                        templateUrl: 'templates/css/buttons.html'
                    }
                }
            })

            .state('tab.forms', {
                url: '/forms',
                views: {
                    'tab-css': {
                        templateUrl: 'templates/css/forms.html'
                    }
                }
            })

            .state('tab.controls', {
                url: '/controls',
                views: {
                    'tab-css': {
                        templateUrl: 'templates/css/controls.html'
                    }
                }
            })

            .state('tab.lists', {
                url: '/lists',
                views: {
                    'tab-css': {
                        templateUrl: 'templates/css/lists.html'
                    }
                }
            })

            .state('tab.cards', {
                url: '/cards',
                views: {
                    'tab-css': {
                        templateUrl: 'templates/css/cards.html'
                    }
                }
            })

            .state('tab.js', {
                url: '/js',
                views: {
                    'tab-js': {
                        templateUrl: 'templates/tab-js.html',
                        controller: 'JsComponentsCtrl'
                    }
                }
            })

            .state('tab.event', {
                url: '/event',
                views: {
                    'tab-event': {
                        templateUrl: 'templates/tab-event.html',
                        controller: 'EventCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/css');

    });
