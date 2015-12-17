app.controller('PayApplyCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', function ($scope, $state, $stateParams, $timeout) {
        $scope.$parent.setCurrentTab($state.current.name);

        if ($stateParams.initialize) {
            $timeout(function() {
                $scope.$parent.stats = {
                    estimated: 52,
                    contractual: 30,
                    direct: 12,
                    pending: 0,
                    unbudgeted: 0,
                    amount: {
                        total: ' -',
                        funds_disbursed: ' -',
                        est_budget: ' -',
                        contractual: ' -',
                        direct: ' -',
                        pending: ' -',
                        unbudgeted: ' -'
                    }
                };
            }, 400);
        }

        $scope.applies = {
            listRequiredByMe: [
                    {flag: 'red', title: 'Confirm Progress on Fireplace', type: "Secure Ledger Board", due_date: '8/16/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Fireplace Install'].join(", "), status: ['In Process', 0]},
                    {flag: 'red', title: 'Need Stairs Ready for Floor Lights', type: "Secure Ledger Board", due_date: '8/17/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Mary Beroset', company: ''}, sow: ['Stairway Floor Lighting'].join(", "), status: ['In Process', 0.3]},
                    {flag: 'yellow', title: 'Decision on Ventilation ', type: "Secure Ledger Board", due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Dave Musgrove', company: ''}, sow: [''].join(", "), status: ['In Process', 0]},
                    {flag: 'yellow', title: 'Confirm Completion of Dry-In', type: "Secure Ledger Board", due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Jeff Price', company: ''}, sow: ['Roof Dry-In'].join(", "), status: ['In Process', 0.25]},
                    {flag: 'yellow', title: 'Contact Inspector to Set Up 4-Way', type: "Secure Ledger Board", due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['-'].join(", "), status: ['In Process', 0]},
                    {flag: 'yellow', title: 'Inspect Fireplace Framing', type: "Secure Ledger Board", due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'John Steel', company: ''}, sow: ['Fireplace Install'].join(", "), status: ['In Process', 0.5]},
                    {flag: 'yellow', title: 'Initiate Bid Process for Drywall', type: "Secure Ledger Board", due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Drywall'].join(", "), status: ['In Process', 0]},
                    {flag: 'green', title: 'Ready for Facia Install', type: "Secure Ledger Board", due_date: '8/27/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Dave Gebo', company: ''}, sow: ['Roof Dry-In'].join(", "), status: ['In Process', 0.8]},
                    {flag: 'green', title: 'Contact Plumber for Install', type: "Secure Ledger Board", due_date: '9/3/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Plumbing Rough-In'].join(", "), status: ['In Process', 0.1]},
                    {flag: 'green', title: 'Clean Job Site', due_date: '-', type: "Secure Ledger Board", responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['-'].join(", "), status: ['In Process', 0]}
            ],
            listRequiredByOthers: [
                {flag: 'red', title: 'Submit Invoice for Additional Lumber', due_date: '8/14/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Jeff Price', company: ''}, sow: ['Roof Dry-In'].join(', '), status: ['In Process', 0.2]},
                {flag: 'red', title: 'Discuss Ventilation Options', due_date: '8/16/2015', responsible: {name: 'Dave Musgrove', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0]},
                {flag: 'red', title: 'Complete Fireplace Framing', due_date: '8/17/2015', responsible: {name: 'John Steel', company: ''},initiator: {name: 'John Steel', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0.8]},
                {flag: 'red', title: 'Close Garage Roof', due_date: '8/17/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: [''].join(', '), status: ['In Process', 0.95]},
                {flag: 'red', title: 'Finish Closing in Roof', due_date: '8/17/2015', responsible: {name: 'Mike Hunter', company: ''},initiator: {name: 'Dave Gebo', company: ''}, sow: [''].join(', '), status: ['In Process', 0.45]},
                {flag: 'red', title: 'Roof Dry-In', due_date: '8/17/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Roof Dry-In'].join(', '), status: ['In Process', 0]},
                {flag: 'yellow', title: 'Electrical Overview', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mary Beroset', company: ''}, sow: ['Main Floor Overhead Lighting'].join(', '), status: ['In Process', 0.3]},
                {flag: 'yellow', title: 'Install Fireplace ', due_date: '8/18/2015', responsible: {name: 'Dave Musgrove', company: ''},initiator: {name: 'Dave  Musgrove', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0]},
                {flag: 'yellow', title: 'Walk-Through w/Deisgner', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mary Beroset', company: ''}, sow: ['Stairway Floor Lighting'].join(', '), status: ['In Process', 0.25]},
                {flag: 'yellow', title: 'Complete Revisions from Walk-Through', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mike Riley', company: ''}, sow: ['Main Floor Overhead Lighting'].join(', '), status: ['In Process', 0]},
                {flag: 'yellow', title: 'Complete Fireplace Install', due_date: '8/19/2015', responsible: {name: 'Dase Musgrove', company: ''},initiator: {name: 'Dave Musgrove', company: ''}, sow: ['-'].join(', '), status: ['In Process', 0.5]},
                {flag: 'yellow', title: 'Final Walk-Through with GC', due_date: '8/19/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Dave Gebo', company: ''}, sow: ['Roof Dry-In'].join(', '), status: ['In Process', 0]},
                {flag: 'yellow', title: 'Product Review', due_date: '8/20/2015', responsible: {name: 'Dave Musgrove', company: ''},initiator: {name: 'Christian Peters', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0.8]},
                {flag: 'green', title: 'Identify Electrical Requirements w/Designer', due_date: '8/22/2015', responsible: {name: 'Mary Beroset', company: ''},initiator: {name: 'Mike Riley', company: ''}, sow: ['Stairway Floor Lighting'].join(', '), status: ['In Process', 0.1]},
                {flag: 'green', title: 'Verify Additional Needs', due_date: '8/27/2015', responsible: {name: 'Dan Bonker', company: ''},initiator: {name: 'Jeff Price', company: ''}, sow: ['Frame 2nd Story'].join(', '), status: ['In Process', 0]},
                {flag: 'green', title: 'Follow Up on Fireplace Install', due_date: '9/1/2015', responsible: {name: 'Christian Peters', company: ''},initiator: {name: 'Dave Musgrove', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0]}
            ],
            listDrafts: [
                {flag: 'draft', title: 'Samples of Door Frames Onsite', due_date: '8/22/2015', responsible: {name: 'Mary Beroset', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Door Frames'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Bring Copy of Instruction Manual', due_date: '8/29/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Verify Completion of Garage Insulation', due_date: '9/7/2015 ', responsible: {name: 'Mike Bearnson', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Insulation '].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Walk-Through ', due_date: '9/12/2015', responsible: {name: 'Jim White', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Window Case'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Discuss Schedule for September', due_date: '9/12/2015', responsible: {name: 'Earnie Rutland', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Base '].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Follow Up on Code', due_date: '-', responsible: {name: '-', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Fire Sprinker Rough In'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Reminder to Input Bid', due_date: '', responsible: {name: 'Brad Harrison', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Drywall'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Required Primer', due_date: '-', responsible: {name: 'Mark Stevens', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Prime'].join(', '), status: ['Draft', '-']}
            ],
            listCompleted: [
                {flag: 'completed', title: 'Follow Up on Steel Support', due_date: '7/21/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Set Steel'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Need to Install Sewer Pump', due_date: '7/14/2015', responsible: {name: 'Christine Spendlove', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Rough Plumbing'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Complete Rough Electical', due_date: '7/9/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mike Riley', company: ''}, sow: ['Rough Electrical'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'What is Rough Mechanical ', due_date: '7/1/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Rough Mechanical'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Site Prep', due_date: '6/30/2015', responsible: {name: 'Dale Guerra', company: ''},initiator: {name: 'Rebekah Brown', company: ''}, sow: ['Pour Foundation'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Verify Setup is Secure', due_date: '6/12/2015', responsible: {name: 'Adam Simpson', company: ''},initiator: {name: 'Dale Guerra', company: ''}, sow: ['Form Foundation Walls'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Measure Twice, Cut Once', due_date: '6/9/2015', responsible: {name: 'Adam Simpson', company: ''},initiator: {name: 'Dale Guerra', company: ''}, sow: ['Form Footings'].join(', '), status: ['Completed', 1]},
                {flag: 'canceled', title: 'Where is the Snow', due_date: '7/16/2015', responsible: {name: 'Torben Moench', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Snow Removal'].join(', '), status: ['Canceled', '-']},
                {flag: 'canceled', title: 'Interview Potential Admin', due_date: '7/5/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['-'].join(', '), status: ['Canceled', '-']},
                {flag: 'canceled', title: 'What is a Submittal', due_date: '6/26/2015', responsible: {name: 'Josh Kimball', company: ''},initiator: {name: 'Steven Phillips', company: ''}, sow: ['Submittals'].join(', '), status: ['Canceled', '-']}
            ]
        }

    }]);