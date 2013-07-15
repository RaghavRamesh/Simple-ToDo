function TodoCtrl($scope) {
	$scope.totalTodos = 4;

	$scope.todos = [
		{text:'Learn Angular', done:false},
		{text:'Create app', done:false}
	];
}