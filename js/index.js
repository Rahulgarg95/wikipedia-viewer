var app = angular.module('wikiApp',[]);

app.controller('wikiController',['$scope','$http',function($scope,$http) {
  $scope.articles=[];
  
  $scope.wikiSearch = function() {
    var api = 'http://en.wikipedia.org/w/api.php?action=query&generator=search&prop=extracts&exintro&exsentences=3&exlimit=max&explaintext&gsrsearch=';
    var callback =  '&format=json&callback=JSON_CALLBACK';
    
  $http.jsonp(api + $scope.searchValue + callback).success(function(data){
 
           $scope.articles=data.query.pages;       }).error(function(data) {
			console.log(data);
		});
    if ($scope.searchValue === '') $scope.articles = [];
  }
}]);