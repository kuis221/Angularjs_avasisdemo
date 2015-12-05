app.controller('DocumentDetailModalCtrl',
    ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
        $scope.permittedUsers = [{
            name: 'Russ Helgeson'
        },
        { 
            name: 'Rhonda Barker'
        }];

        $scope.comments = [
            {
                id: 1,
                avatar: 'assets/img/user_1.png',
                created_by: 'Phil Jones',
                created_at: 'Jun 23, 2015 - 3:40PM',
                pos: {
                    x: 200,
                    y: 90
                },
                body: "Will this document be abe to be used in the build.  I want to have it used so we can have a safe fireplace.  If it can not be used let me know."
            },
            {
                id: 2,
                avatar: 'assets/img/user_3.png',
                created_by: 'Harry Kane',
                created_at: 'Oct 23, 2015 - 3:40PM',
                pos: {
                    x: 300,
                    y: 200
                },
                body: "Angular Material provides typography CSS classes you can use to create visual consistency across your application."
            }
        ];
        $scope.isHiddenComments = true;
        $scope.activeComment = {};

        $scope.selectComment = function(comment) {
            $scope.activeComment = comment;
            $scope.isHiddenComments = false;
        }
        $scope.activeClass = function(comment) {
            return $scope.activeComment.id == comment.id ? 'active' : '';
        }
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);