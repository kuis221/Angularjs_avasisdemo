app.controller('DocumentDetailModalCtrl',
    ['$scope', '$uibModalInstance', 'selectedDoc', function($scope, $uibModalInstance, selectedDoc) {
        $scope.selectedDoc = selectedDoc
        $scope.permittedUsers = [{
            name: 'Bruce Wayne'
        },
        {
            name: 'Scott Campbell'
        },
        {
            name: 'Erin Sherman'
        }];

        $scope.comments = [
            {
                id: _.uniqueId(),
                avatar: 'assets/img/user_1.png',
                created_by: 'Brad Harrison',
                created_at: 'Aug 4, 2015 2:24PM',
                pos: {
                    x: 615,
                    y: 85
                },
                body: "What is this date referring to? Is this the due date?"
            },
            {
              fasdf  id: _.uniqueId(),
                avatar: 'assets/img/bruce-wayne.png',
                created_by: 'Bruce Wayne',
                created_at: 'Aug 8, 2015 3:40PM',
                pos: {
                    x: 406,
                    y: 614
                },
                body: "Will this clip suffice?"
            },
            {
                id: _.uniqueId(),
                avatar: 'assets/img/user_3.png',
                created_by: 'Erin Sherman',
                created_at: 'Aug 10, 2015 - 8:14AM',
                pos: {
                    x: 307,
                    y: 443
                },
                body: "Let me know if there is any confusion on the different barriers and walls I'm referring to."
            }
        ];

        $scope.users = [
            {
                id: 1,
                name: "Joanna Fankhauser"
            }, {
                id: 2,
                name: "Eric Carlson"
            }, {
                id: 3,
                name: "Bruce Wayne"
            }, {
                id: 4,
                name: "Scott Campbell"
            }, {
                id: 5,
                name: "Erin Sherman"
            },
            {
                id: 6,
                name: 'Russ Helgeson',
                checked: true
            },
            {
                id: 7,
                name: 'Rhonda Barker',
                checked: true
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
            lastComment.avatar = 'assets/img/bruce-wayne.png';
            lastComment.created_by = 'Bruce Wayne';
            lastComment.created_at = moment().format('lll');
            lastComment.id = _.uniqueId();
        }
        $scope.changePermittedUsers = function(userIds) {
            $scope.permittedUsers = _.filter($scope.users, function(e){
                return e.checked;
            });
        }
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);