
var app = angular.module("QuizPrep", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: "templates/home.html",
		controller: 'HomeController'
	})
	.when('/quiz', {
		templateUrl: 'templates/quiz.html',
		controller: 'QuizController'
	})
	.otherwise({ redirectTo: '/' });
});

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

app.controller('QuizController', function($scope) {
});

function setQuestionNum(theQuestionNum) {
	console.log(theQuestionNum);
	$('.questionnum').css('background-color','#272822');
	$('.questionnum').removeClass('active');
	$(theQuestionNum).css('background-color', '#008cba');
	$(theQuestionNum).addClass('active');
	$(theQuestionNum).triggerHandler('input');
	$scope.quesnum = $('.questionnum.active').attr('myvalue');
}