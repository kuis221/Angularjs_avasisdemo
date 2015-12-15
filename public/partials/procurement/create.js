/**
* Created by Anton on 12/14/2015
*/
app.controller('ProcurementCreateCtrl', ['$scope', '$state', function($scope, $state){
	$scope.procurementType = 'Ornare Cras';
	$scope.workScope = 'Ullamcorper Adipiscing';
	$scope.dateDue = 'Aug 23,2015';
	$scope.procurementNumber = 'PRO1393';
	$scope.dateInit = '8/23/14';
	$scope.creator = 'Eric Hoffman';
	$scope.procurementStatus = 'In Process';
	$scope.selectionBy = {
		name: 'Eric Hoffman',
		date: 'Aug 29,2015'
	};
	$scope.procurementBy = {
		name: 'Bob Jones',
		date: 'Aug 29,2015'
	};
	$scope.approvalBy = {
		name: 'Kimball Frank',
		date: 'Aug 29,2015'
	};
	$scope.desc = 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper.';

	$scope.scopeList = [
		{
			id: 'CA',
			name: 'CA'
		},
		{
			id: 'NA',
			name: 'NA'
		}
	];
	$scope.revisionRequested = true;

	$scope.getClass = function(state) {
		var currentStep = parseInt($state.current.name.slice(-1));
		if (state == currentStep) {
			return 'wizard-active'
		}
		if (state < currentStep) {
			return 'wizard-past'
		}
		return 'wizard-step';
	};

	$scope.goNext = function() {
		var currentStep = parseInt($state.current.name.slice(-1));
		if (currentStep < 4) {
			nextStep = 'procurement.create.step' + (currentStep + 1);
			$state.go(nextStep);
		}
	};

	$scope.isFinal = function() {
		var currentStep = parseInt($state.current.name.slice(-1));
		if (currentStep == 4) {
			return true;
		}
		return false;
	}
}]);
