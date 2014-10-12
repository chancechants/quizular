'use strict';

/* Controllers */

function HomeController($scope, $http, $routeParams, $location, $resultsService) {
app.controller('HomeController', function($scope) {
  $scope.name = $('#name').val();
  $scope.email = $('#email').val();
  $scope.quesnum = $('.questionnum.active').attr('myvalue');
  console.log('quesnum:'+$scope.quesnum);
  $scope.startQuiz = function() {
    var x = $('.questionnum.active').attr('myvalue');
    console.log(x);
    if (x === undefined) { console.log('No quesnum entered!'); } 
    else { console.log('Quiz Started!'); }
  }
});


function QuestionsController($scope, $http, $routeParams, $location, $resultsService) {

  $scope.questionNo = $routeParams && $routeParams.questionNo ? $routeParams.questionNo : 1;
  $http.get('questions/questions.json').success(function (questions){
    $scope.questions = questions;
  });

  $scope.selectAnswer = function (question, choice) {
    question.selected = choice;
  };


  $scope.viewResults = function () {
    $resultsService.setResults($scope.questions);
    $location.path( "/results" );
  }
}
QuestionsController.$inject = ['$scope', '$http', '$routeParams', '$location', 'resultsService'];

function ResultsController ($scope, $location, $resultsService) {
  $scope.results = $resultsService.getResults();
  $('#results').modal();


  $scope.closeModal = function() {
    $('#results').modal('hide');
    $location.path('/questions/'+($scope.results.length));
  }
}
ResultsController.$inject = ['$scope', '$location', 'resultsService'];

