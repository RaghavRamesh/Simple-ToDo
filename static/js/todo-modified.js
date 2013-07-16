angular.module('ToDo', [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '../static/todo/todo.html',
				controller: 'ToDo.ToDoController'
			})
	}])
	.controller('ToDo.ToDoController', [
		'$scope',

		function($scope) {

			$scope.todos = [
				{text:'Learn Angular', done:false},
				{text:'Create app', done:false}
			];

			$scope.getTotalTodos = function () {
				return $scope.todos.length;
			};	

			$scope.addTodo = function () {	
				$scope.todos.push({text:$scope.formTodoText, done:false});
				$scope.formTodoText="";
			};

			$scope.clearCompletedTodos = function () {
				$scope.todos = _.filter($scope.todos, function(todo){
					return !todo.done;
				})
			};

		}
	]);