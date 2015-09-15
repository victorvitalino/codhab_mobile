var app = angular.module('codhab', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/login.html'
  })
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html'
  })
  $stateProvider.state('questions', {
    url: '/questions',
    templateUrl: 'templates/questions.html'
  })
  $stateProvider.state('schedule', {
    url: '/schedule',
    templateUrl: 'templates/schedule.html'
  })
  $stateProvider.state('assist', {
    url: '/assist',
    templateUrl: 'templates/assist.html'
  })
  $stateProvider.state('register', {
    url: '/register',
    templateUrl: 'templates/register.html'
  })
  $stateProvider.state('no_register', {
    url: '/no_register',
    templateUrl: 'templates/no_register.html'
  })
  $stateProvider.state('reset_password', {
    url: '/reset_password',
    templateUrl: 'templates/reset_password.html'
  })
})
