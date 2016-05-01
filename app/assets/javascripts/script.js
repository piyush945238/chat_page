var app = angular.module('app', ['ngCookies'], function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    rewriteLinks: false
  });
});

app.controller('dashboard', ['$scope', '$http',
  function($scope, $http) {
    $scope.contact_list = [{
      number: "9597450112",
      last_chat: 8
    }, {
      number: "8997450112",
      last_chat: 8
    }, {
      number: "7747450112",
      last_chat: 1
    }, {
      number: "8627450112",
      last_chat: 3
    }, {
      number: "9997450112",
      last_chat: 6
    }, {
      number: "7637450112",
      last_chat: 7
    }, {
      number: "7007450112",
      last_chat: 1
    }, {
      number: "7207450112",
      last_chat: 8
    }, {
      number: "7207450112",
      last_chat: 8
    }, {
      number: "7207450112",
      last_chat: 8
    }, {
      number: "7207450112",
      last_chat: 8
    }, {
      number: "7207450112",
      last_chat: 8
    }, {
      number: "7207450112",
      last_chat: 8
    }, {
      number: "7207450112",
      last_chat: 8
    }, {
      number: "7207450112",
      last_chat: 8
    }, {
      number: "7207450112",
      last_chat: 8
    }, {
      number: "7207450112",
      last_chat: 8
    }];



    // $scope.display_search_result = function() {
    //   for(var i=0; i< $scope.all_courses_list.elements.length(); i++) {
    //   }
    // };
  }
]);
