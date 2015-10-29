var app = angular.module('mean', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/demo', {
        templateUrl: 'templates/example.client.view.html',
        controller: 'DemoCtrl',
        controllerAs: 'demo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });