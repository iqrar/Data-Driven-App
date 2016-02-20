
var app= angular
  .module('dataApp', [
    'ui.router',
    'ui-notification',
    'datatables'
  ]).config(function ($provide,$locationProvider,$urlRouterProvider,$stateProvider) {
  $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise("/home");
    $stateProvider.
      state('home', {
      url: "/home",
      templateUrl: "views/table.html",
      controller: 'TableCtrl',
      data: { requiresLogin: true }
    });
});



