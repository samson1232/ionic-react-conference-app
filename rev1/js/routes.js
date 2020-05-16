angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.landingPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/landingPage.html',
        controller: 'landingPageCtrl'
      }
    }
  })

  .state('tabsController.questMenu', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/questMenu.html',
        controller: 'questMenuCtrl'
      }
    }
  })

  .state('questMenu2', {
    url: '/page7',
    templateUrl: 'templates/questMenu2.html',
    controller: 'questMenu2Ctrl'
  })

  .state('oneBobaADayChallenge', {
    url: '/page9',
    templateUrl: 'templates/oneBobaADayChallenge.html',
    controller: 'oneBobaADayChallengeCtrl'
  })

  .state('3ManSquad', {
    url: '/page10',
    templateUrl: 'templates/3ManSquad.html',
    controller: '3ManSquadCtrl'
  })

  .state('lyfeTheGame', {
    url: '/page5',
    templateUrl: 'templates/lyfeTheGame.html',
    controller: 'lyfeTheGameCtrl'
  })

  .state('signup', {
    url: '/page8',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page3')


});