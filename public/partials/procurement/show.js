app.controller('ProcurementShowCtrl', 
    ['$scope', '$state', function($scope, $state){
        $scope.users = [
            { id: 1, name: 'Bob Jones'},
            { id: 2, name: 'Darcy Bertrand'},
            { id: 3, name: 'Bryan Lloyd'},
            { id: 3, name: 'Anrew Klein'}
        ];
        $scope.procurement = {
            responsible: $scope.users[0]
        }
        $scope.procurementNumber = 'PRO1393';
        $scope.dateInit = '8/23/14';
        $scope.creator = 'Eric Hoffman';
        $scope.procurementStatus = 'In Process';

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