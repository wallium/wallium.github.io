app.directive('project', function(){
	return {
		restrict: 'E',
		scope: {
			proj: '='
		},
		templateUrl: 'js/directives/project.html'
	}
});