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
                id: _.uniqueId(),
                avatar: 'assets/img/user_1.png',
                created_by: 'Phil Jones',
                created_at: 'Jun 23, 2015 - 3:40pm',
                pos: {
                    x: 200,
                    y: 90
                },
                body: "Will this document be abe to be used in the build.  I want to have it used so we can have a safe fireplace.  If it can not be used let me know."
            },
            {
                id: _.uniqueId(),
                avatar: 'assets/img/user_3.png',
                created_by: 'Harry Kane',
                created_at: 'Oct 23, 2015 - 3:40pm',
                pos: {
                    x: 300,
                    y: 200
                },
                body: "Angular Material provides typography CSS classes you can use to create visual consistency across your application."
            }
        ];
        $scope.isHiddenComments = true;
        $scope.activeComment = {};
        $scope.isAddingComment = false;

        $scope.selectComment = function(comment) {
            $scope.activeComment = comment;
        }
        $scope.activeClass = function(comment) {
            return $scope.activeComment.id == comment.id ? 'active' : '';
        }
        $scope.addComment = function() {
            // return if new comment is posted yet.
            if (!_.last($scope.comments).id)
                return;
            $scope.isAddingComment = true
        }
        $scope.dropComment = function(evt) {
            if (!$scope.isAddingComment)
                return;
            $scope.isAddingComment = false;
            $scope.isHiddenComments = false
            var comment = {
                pos: {
                    x: evt.offsetX + 20,
                    y: evt.offsetY + 20
                }
            }
            $scope.comments.push(comment);
            angular.element('#comment-body').focus();
        }
        $scope.cancelComment = function() {
            $scope.comments.splice($scope.comments.length - 1, 1);
        }
        $scope.createComment = function() {
            lastComment = _.last($scope.comments);
            lastComment.avatar = 'assets/img/user_2.png';
            lastComment.created_by = 'Andrew Klein';
            lastComment.created_at = 'Dec 8, 2015 - 3:00pm';
            lastComment.id = _.uniqueId();
        }
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);