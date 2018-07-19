(function() {
	angular
		.module("textEditor", ['textAngular'])
		.controller("textController", ['$scope', 'textAngularManager', textController]);

	function textController($scope, textAngularManager) {
		$scope.version = textAngularManager.getVersion();
        $scope.versionNumber = $scope.version.substring(1);
		$scope.htmlContent = '<h2>Try me!</h2><p>Googly Dox is a text-editor made for simplicity and efficiency.</p>';
	};
})();
