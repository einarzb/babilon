var app = angular.module('dictionaryApp', []);

app.controller('dictionaryCtrl',
['$scope','dictionaryFactory',

function($scope, dictionaryFactory) {

$scope.words = dictionaryFactory.getDictionary();
console.log($scope.words);

}]);
