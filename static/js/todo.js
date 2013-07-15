function TodoCtrl($scope) {
	

	$scope.todos = [
		{text:'Learn Angular', done:false},
		{text:'Create app', done:false}
	];

	$scope.getTotalTodos = function () {
		return $scope.todos.length;
	}
	

	$scope.addTodo = function () {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText="";
	}
}