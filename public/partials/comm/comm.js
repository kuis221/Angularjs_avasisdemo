app.controller('CommCtrl',
    ['$scope', '$state', '$stateParams', '$timeout', function($scope, $state, $stateParams, $timeout) {
        $scope.comms = [
            {
                id: 1,
                receiver: "Dave Gebo",
                img_url: "assets/img/avasisteam/gebo.jpg",
                is_important: false,
                is_opened: false,
                time: "1:17pm",
                time_full: "1:17pm - Today",
                project: "Schedule for Roof Dry-In Completion",
                replies_abs: "Hi Bob, I appologize for the delayed response, My team an...",
                replies: "Hi Bob, I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline. Not to mention before this massive storm is supposed to blow in. As of right now we should have this completed by end of day. Fingers crossed that we dont run into any issues. I will inform you immediately if it does not look like we will be completing the task today. Sorry if this causes any uneasieness, you set a very tight deadline. Ill get back to you regardless, end of day. Talk to you soon, Dave",
                num: 2,
                receives: [
                    {
                        id: 11,
                        from: "Bruce Wayne",
                        img_url: "assets/img/avasisteam/bruce.jpg",
                        time_full: "7:32am - Aug 15, 2015",
                        msg: "Dave, I am checking in with you to make sure that everything is going well on the Roof Dry-In process and that you are still on schedule to complete the task on the required day? Hope you are well, look forward to hearing back from you ASAP."
                    }
                ]
            },
            {
                id: 2,
                receiver: "Jeff Price",
                img_url: "assets/img/avasisteam/jeff.jpg",
                is_important: false,
                is_opened: false,
                time: "3:23pm",
                time_full: "3:23pm - Aug 14, 2015",
                project: "Lumber for Wilmington Roof",
                replies_abs: "I want to touch base with you before the weekend to verify...",
                replies: "I want to touch base with you before the weekend to verify...",
                num: 0,
                receives: []
            },
            {
                id: 3,
                receiver: "Christian Peters",
                img_url: "assets/img/avasisteam/peters.jpg",
                is_important: true,
                is_opened: false,
                time: "5:47pm",
                time_full: "5:47pm - Aug 12, 2015",
                project: "Fireplace Install",
                replies_abs: "The Fireplace install is just around the corner, lets discuss a ti...",
                replies: "The Fireplace install is just around the corner, lets discuss a ti...",
                num: 0,
                receives: []
            },
            {
                id: 4,
                receiver: "Dave Gebo",
                img_url: "assets/img/avasisteam/gebo.jpg",
                is_important: false,
                is_opened: false,
                time: "10:32am",
                time_full: "10:32am - Aug 11, 2015",
                project: "Roof Dry-In Update",
                replies_abs: "Another update on the progress of the Roof. Right now we are set...",
                replies: "Another update on the progress of the Roof. Right now we are set...",
                num: 6,
                receives: []
            },
            {
                id: 5,
                receiver: "Mary Beroset",
                img_url: "assets/img/avasisteam/marry.jpg",
                is_important: true,
                is_opened: false,
                time: "12:27pm",
                time_full: "12:27pm - Aug 8, 2015",
                project: "Requesting Walk-Through",
                replies_abs: "Now that Dry-In is complete, we need to walk through and review design...",
                replies: "Now that Dry-In is complete, we need to walk through and review design...",
                num: 0,
                receives: []
            }
        ];
        $scope.card = 0;
        $scope.messages = $scope.comms[0];
        $scope.setCard = function(newCard){
            $scope.card = newCard;
            $scope.messages = $scope.comms[newCard];
        };
        $scope.isSet = function(cardNum){
            return $scope.card === cardNum;
        };
        $scope.isImportant = function(cardNum){
            return $scope.comms[cardNum].is_important;
        };

    }]);