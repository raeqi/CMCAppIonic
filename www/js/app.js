// Ionic template App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'SimpleRESTIonic' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('SimpleRESTIonic', ['ionic', 'backand', 'SimpleRESTIonic.controllers', 'SimpleRESTIonic.services', 'ion-floating-menu', 'ionic-audio'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })
    .config(function (BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider, $sceDelegateProvider) {

        BackandProvider.setAppName('cmcapp'); // change here to your app name
        BackandProvider.setSignUpToken('14bd624e-3d7c-4585-a287-e5e904d44b86'); //token that enable sign up. see http://docs.backand.com/en/latest/apidocs/security/index.html#sign-up
        BackandProvider.setAnonymousToken('33034467-610a-4d3e-a3e1-ffee0c59c44a'); // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access

        $ionicConfigProvider.backButton.previousTitleText(false);

        $sceDelegateProvider.resourceUrlWhitelist(['**']);

        $stateProvider
            // setup an abstract state for the tabs directive
            .state('landing', {
                url: '/landing',
                abstract: true,
                templateUrl: 'templates/landing.html'
            })
            .state('landing.auth', {
                url: '/auth',
                views: {
                    'auth': {
                        templateUrl: 'templates/landing-auth.html',
                        controller: 'AuthCtrl as auth'
                    }
                }
            })
            .state('landing.login', {
                url: '/login',
                views: {
                    'auth': {
                        templateUrl: 'templates/landing-login.html',
                        controller: 'LoginCtrl as login'
                    }
                }
            })
            .state('landing.signup', {
                url: '/signup',
                views: {
                    'auth': {
                        templateUrl: 'templates/landing-signup.html',
                        controller: 'SignupCtrl as signup'
                    }
                }
            })
            .state('tab', {
                url: '/tabs',
                abstract: true,
                controller: 'MenuCtrl as menu',
                templateUrl: 'templates/tabs.html'
            })
            .state('tab.dashboard', {
                url: '/dashboard',
                views: {
                    'tab-dashboard': {
                        templateUrl: 'templates/tab-dashboard.html',
                        controller: 'DashboardCtrl as vm'
                    }
                }
            })
            .state('tab.event', {
                url: '/event',
                views: {
                    'tab-event': {
                        templateUrl: 'templates/tab-event.html',
                        controller: 'EventCtrl as event'
                    }
                }
            })
            .state('tab.detail', {
                url: '/event/:eventId',
                views: {
                    'tab-event': {
                        templateUrl: 'templates/tab-event-detail.html',
                        controller: 'EventDetailCtrl as eventDetail'
                    }
                }
            })
            .state('tab.music', {
                url: '/music',
                views: {
                    'tab-music': {
                        templateUrl: 'templates/tab-music.html',
                        controller: 'MusicCtrl as music'
                    }
                }
            })
            .state('tab.sponsor', {
                url: '/sponsor',
                views: {
                    'tab-sponsor': {
                        templateUrl: 'templates/tab-sponsor.html',
                        controller: 'SponsorCtrl as sponsor'
                    }
                }
            })
            .state('tab.info', {
                url: '/info',
                views: {
                    'tab-info': {
                        templateUrl: 'templates/tab-info.html',
                        controller: 'InfoCtrl as info'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tabs/event');

        $httpProvider.interceptors.push('APIInterceptor');
    })

    .run(function ($rootScope, $state, LoginService, Backand) {

        function unauthorized() {
            console.log("user is unauthorized, sending to login");
            $state.go('landing.auth');
        }

        function signout() {
            LoginService.signout();
        }

        $rootScope.$on('unauthorized', function () {
            unauthorized();
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            console.log("state changed success:" + toState.name);
            if (toState.name == 'landing.auth' || toState.name == 'landing.login' || toState.name == 'landing.signup') {
                signout();
            }
            else if (toState.name != 'landing.auth' 
                && toState.name != 'landing.login' 
                && toState.name != 'landing.signup' 
                && (Backand.getToken() === undefined || Backand.getToken() == null)) {
                unauthorized();
            }
        });

    })

