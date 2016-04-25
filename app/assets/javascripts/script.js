var app = angular.module('app', ['ngCookies'], function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    rewriteLinks: false
  });
});

app.controller('dashboard', ['$scope', '$http',
  function($scope, $http) {

    $scope.getCookie = function() {
      $scope.loader_display = true;
      $http.get('courses/fetch?course=' +
        $scope.search_text)
        .success(function(response) {
          $scope.courses_list = response.a;
          $scope.instructor_list = response.d;
          $scope.partners_list = response.c;
          $scope.loader_display = false;
        })
        .error(function() {
          alert("fuck not work");
        });
    };

    // $scope.display_search_result = function() {
    //   for(var i=0; i< $scope.all_courses_list.elements.length(); i++) {
    //   }
    // };
  }
]);
