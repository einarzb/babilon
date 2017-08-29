var app = angular.module('dictionaryApp', []);

app.controller('dictionaryCtrl',
['$scope','dictionaryFactory',

function($scope, dictionaryFactory) {
  //initilaze
  $scope.searchVal = "";
  $scope.dict = false; // hide results

  //get all data from dictionary
  $scope.words = dictionaryFactory.getDictionary();
  //get all combinations of abc 2-letters
  $scope.comboAbc = dictionaryFactory.abcCombinationCreator();

  //function that invokes from search bar
  $scope.searchWord = function(searchVal){
      dictionaryFactory.dictionaryScanner();
      $scope.searchVal = dictionaryFactory.searchWord(searchVal);
  }

  $scope.revealAllDictionary = function(){
    $scope.dict = true;
  }


}]);
