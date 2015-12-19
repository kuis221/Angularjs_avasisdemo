/**
* Created by Anton on 12/17/2015
*/
app.controller('BidsPackageCtrl', ['$scope', '$state', function($scope, $state){
	$scope.company = 'Anderson Perkins LTD Shipping Center';
	$scope.address1 = '1796 Prospector Avenue';
	$scope.address2 = 'Park City, Utah 84605';

	$scope.bidNumber = '193';
	$scope.dateInit = '8/23/14';
	$scope.creator = 'Eric Hoffman';
	$scope.procurementStatus = 'In Progress';
	$scope.responsibleList = [
		{
			id: '1',
			name: 'Bob Jones'
		},
		{
			id: '2',
			name: 'Eric Hoffman'
		}
	];
	$scope.generalContractor = 'Bob Jones';
	$scope.contractorPhone = '415 123 3456';
	$scope.contactorCompany = 'Flora Corp'
	
	$scope.projectManager = 'Sloan Urry';
	$scope.managerPhone = '415 123 3456';
	$scope.managerCompany = 'Abc inc'

	$scope.projectDateOn = 'Aug 23, 2015';
	$scope.ProjectDateBidClose = 'Dec 6, 2015';

	$scope.documents = [
		'Document Name.pdf',
		'Document Name.jpg'
	];

	$scope.projectLinks = [
		'http://projectlink.com',
		'http://anotherprojectlink.com/somethin...'
	];

	$scope.projectEstimates = [
		{
			scopeOfWork: 'Lorem Dapibus Vestibulum',
			quantity: 500,
			measurement: 'Cubic Feet',
			material: '#300 Concrete',
			materialLink: 'http://loremipsum.net',
			details: 'Concrete should be Color #57F'
		},
		{
			scopeOfWork: 'Cras Consectetur',
			quantity: 3000,
			measurement: 'Cubic Feet',
			material: '#300 Concrete',
			materialLink: 'http://loremipsum.net',
			details: 'Nulla vitae elit libero, a pharetra augue.'
		},
		{
			scopeOfWork: 'Cursus Nullam Parturient',
			quantity: 519,
			measurement: 'Cubic Feet',
			material: '#300 Concrete',
			materialLink: 'http://loremipsum.net',
			details: 'Nullam id dolor id nibh ultricies vehicula  indura...'
		}
	];

	$scope.costScheduledBreakdown = [
		{
			scopeOfWork: {
				title: 'Firstplace',
				division: 'Division 3'
			},
			costCode: {
				code: '03050',
				title: 'Basic Concrete Materials and Methods'
			},
			phase: {
				parent: '9- Interior Finishes',
				sub: '9.8- Fireplace'
			},
			duration: '1 week',
			labor: 123456,
			material: 123456,
			equipment: 123456,
			misc: 123456,
			total: 123456,
			requireSelection: true,
			responsibleToSelection: 'Interior Designer',
			requireOrder: true,
			responsibleToSelection2: 'Subcontractor'
		},
		{
			scopeOfWork: {
				title: 'Pool',
				division: 'Division 2'
			},
			costCode: {
				code: '03010',
				title: 'Concrete Forms and Accessories'
			},
			phase: {
				parent: '6- Exterior',
				sub: '6.3- Pool'
			},
			duration: '5 weeks',
			labor: 123456,
			material: 123456,
			equipment: 123456,
			misc: 123456,
			total: 123456,
			requireSelection: false,
			responsibleToSelection: '',
			requireOrder: true,
			responsibleToSelection2: 'Subcontractor'
		},
		{
			scopeOfWork: {
				title: 'Cursus Nullam Parturient',
				division: 'Division 5'
			},
			costCode: {
				code: '03010',
				title: 'Concrete Forms Accessories'
			},
			phase: {
				parent: '6- Exterior',
				sub: '6.3- Pool'
			},
			duration: '3 weeks',
			labor: 123456,
			material: 123456,
			equipment: 123456,
			misc: 123456,
			total: 123456,
			requireSelection: true,
			responsibleToSelection: 'General Contractor',
			requireOrder: true,
			responsibleToSelection2: 'General Contractor'
		}
	];

	$scope.comments = [
		{
			name: 'Bob Jones',
			image: '/assets/img/user_5.png',
			date: 'May 20, 2015',
			time: '3:40pm',
			detail: 'This is a comment. Maecenas faucibus mollis interdum. Cum sociis natoque penati bus et magnis dis parturient montes.'
		},
		{
			name: 'Eric Hoffman',
			image: '/assets/img/user_1.png',
			date: 'May 20, 2015',
			time: '3:40pm',
			detail: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.'
		},
		{
			name: 'Sloan Urry',
			image: '/assets/img/user_2.png',
			date: 'May 20, 2015',
			time: '3:40pm',
			detail: 'This is a comment. Maecenas faucibus mollis interdum. Cum sociis natoque penati bus et magnis dis parturient montes.'
		},
		{
			name: 'Eric Hoffman',
			image: '/assets/img/user_1.png',
			date: 'May 20, 2015',
			time: '3:40pm',
			detail: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.'
		},
		{
			name: 'Joe Brown',
			image: '/assets/img/user_2.png',
			date: 'May 20, 2015',
			time: '3:40pm',
			detail: 'This is a comment. Maecenas faucibus mollis interdum. Cum sociis natoque penati bus et magnis dis parturient montes.'
		},
	];
}]);
