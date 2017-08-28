var app = angular.module('dictionaryApp', []);

app.controller('dictionaryCtrl',
['$scope','dictionaryFactory',

function($scope, dictionaryFactory) {
  //initilaze
  $scope.searchVal = "";
  $scope.dict = false; // hide results

  //get all data from dictionary
  $scope.words = dictionaryFactory.getDictionary();

  //function that invokes from search bar
  $scope.searchWord = function(searchVal){
      $scope.searchVal = dictionaryFactory.searchWord(searchVal);
      //reveal results
      $scope.dict = true;
  }
}]);
