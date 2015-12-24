/**
* Created by Anton on 12/17/2015
*/
app.controller('BidsPackageCtrl',
    ['$scope', '$state', function($scope, $state) {

        $scope.users = [
            {
                id: _.uniqueId(),
                name: 'Bruce Wayne'
            }, {
                id: _.uniqueId(),
                name: 'Dan Bonker'
            }, {
                id: _.uniqueId(),
                name: 'Mike Riley'
            }];

        $scope.curResponsible = $scope.users[0];

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
            }, {
                scopeOfWork: 'Cras Consectetur',
                quantity: 3000,
                measurement: 'Cubic Feet',
                material: '#300 Concrete',
                materialLink: 'http://loremipsum.net',
                details: 'Nulla vitae elit libero, a pharetra augue.'
            }, {
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
            }, {
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
            }, {
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
                avatar: 'bruce.jpg',
                author: 'Bruce Wayne',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'jeff.jpg',
                author: 'Jeff Price',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'peters.jpg',
                author: 'Christian Peters',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'jane.jpg',
                author: 'Jane Smith',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'dan.jpg',
                author: 'Dan Bonker',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'bruce.jpg',
                author: 'Bruce Wayne',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'jeff.jpg',
                author: 'Jeff Price',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'peters.jpg',
                author: 'Christian Peters',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'jane.jpg',
                author: 'Jane Smith',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'dan.jpg',
                author: 'Dan Bonker',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }
        ];

    }]);
