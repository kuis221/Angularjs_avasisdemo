app.controller('ActionItemsCtrl',
    ['$scope', '$state', '$stateParams', '$uibModal', function($scope, $state, $stateParams, $uibModal) {

        // Action Items Main
        $scope.items = [];
        $scope.pieOptions = {
            type: 'pie',
            height: '50px',
            offset: -90,
            sliceColors: ['#79c485', '#eeeeee'],
            disableTooltips: true
        };
        $scope.gai = {
            state: "action-items.general-action-items",
            title: "Tasks",
            total: 28,
            green: 6,
            orange: 12,
            red: 8,
            completed: {
                total: 35,
                done: 7
            },
            assignedMe: {
                green: {
                    total: 3,
                    done: 1
                },
                orange: {
                    total: 5,
                    done: 1,
                },
                red: {
                    total: 2,
                    done: 0.5
                }
            },
            listRequiredByMe: [
                    {flag: 'red', title: 'Confirm Progress on Fireplace', due_date: '8/16/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Fireplace Install'].join(", "), status: ['In Process', 0]},
                    {flag: 'red', title: 'Need Stairs Ready for Floor Lights', due_date: '8/17/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Mary Beroset', company: ''}, sow: ['Stairway Floor Lighting'].join(", "), status: ['In Process', 0.3]},
                    {flag: 'yellow', title: 'Decision on Ventilation ', due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Dave Musgrove', company: ''}, sow: [''].join(", "), status: ['In Process', 0]},
                    {flag: 'yellow', title: 'Confirm Completion of Dry-In', due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Jeff Price', company: ''}, sow: ['Roof Dry-In'].join(", "), status: ['In Process', 0.25]},
                    {flag: 'yellow', title: 'Contact Inspector to Set Up 4-Way', due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['-'].join(", "), status: ['In Process', 0]},
                    {flag: 'yellow', title: 'Inspect Fireplace Framing', due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'John Steel', company: ''}, sow: ['Fireplace Install'].join(", "), status: ['In Process', 0.5]},
                    {flag: 'yellow', title: 'Initiate Bid Process for Drywall', due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Drywall'].join(", "), status: ['In Process', 0]},
                    {flag: 'green', title: 'Ready for Facia Install', due_date: '8/27/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Dave Gebo', company: ''}, sow: ['Roof Dry-In'].join(", "), status: ['In Process', 0.8]},
                    {flag: 'green', title: 'Contact Plumber for Install', due_date: '9/3/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Plumbing Rough-In'].join(", "), status: ['In Process', 0.1]},
                    {flag: 'green', title: 'Clean Job Site', due_date: '-', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['-'].join(", "), status: ['In Process', 0]}
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
        };

        $scope.rfi = {
            state: "action-items.rfi.main",
            title: "RFI",
            total: 36,
            green: 15,
            orange: 13,
            red: 8,
            completed: {
                total: 66,
                done: 30
            },
            assignedMe: {
                green: {
                    total: 7,
                    done: 4
                },
                orange: {
                    total: 9,
                    done: 5,
                },
                red: {
                    total: 3,
                    done: 1
                }
            },
            listRequiredByMe: [
                    {flag: 'red', title: 'Confirm Progress on Fireplace', sTitle: 'Secure Ledger Board', due_date: '8/16/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(", "), status: ['In Process', 0]},
                    {flag: 'red', title: 'Need Stairs Ready for Floor Lights', sTitle: 'Aenean Lacinai bibendum', due_date: '8/17/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Mary Beroset', company: 'ABC Inc'}, sow: ['Stairway Floor Lighting'].join(", "), status: ['In Process', 0.3]},
                    {flag: 'red', title: 'Need Stairs Ready for Floor Lights', sTitle: 'Aenean Lacinai bibendum', due_date: '8/17/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Mary Beroset', company: 'ABC Inc'}, sow: ['Stairway Floor Lighting'].join(", "), status: ['In Process', 0.3]},
                    {flag: 'yellow', title: 'Contact Inspector to Set Up 4-Way', sTitle: 'Secure Ledger Board', due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['-'].join(", "), status: ['In Process', 0]},
                    {flag: 'yellow', title: 'Inspect Fireplace Framing', sTitle: 'Aenean Lacinai bibendum', due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'John Steel', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(", "), status: ['In Process', 0.5]},
                    {flag: 'yellow', title: 'Initiate Bid Process for Drywall', sTitle: 'Secure Ledger Board', due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Drywall'].join(", "), status: ['In Process', 0]},
                    {flag: 'green', title: 'Ready for Facia Install', sTitle: 'Secure Ledger Board', due_date: '8/27/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Dave Gebo', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(", "), status: ['In Process', 0.8]}
            ],

            listRequiredByOthers: [
                {flag: 'red', title: 'Submit Invoice for Additional Lumber', sTitle: 'Secure Ledger Board', due_date: '8/14/2015', responsible: {name: 'Dave Gebo', company: 'ABC Inc'},initiator: {name: 'Jeff Price', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(', '), status: ['In Process', 0.2]},
                {flag: 'red', title: 'Discuss Ventilation Options', sTitle: 'Secure Ledger Board', due_date: '8/16/2015', responsible: {name: 'Dave Musgrove', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0]},
                {flag: 'red', title: 'Roof Dry-In', sTitle: 'Secure Ledger Board', due_date: '8/17/2015', responsible: {name: 'Dave Gebo', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(', '), status: ['In Process', 0]},
                {flag: 'yellow', title: 'Electrical Overview', sTitle: 'Secure Ledger Board', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: 'ABC Inc'},initiator: {name: 'Mary Beroset', company: 'ABC Inc'}, sow: ['Main Floor Overhead Lighting'].join(', '), status: ['In Process', 0.3]}
            ],
            listDrafts: [
                {flag: 'draft', title: 'Discuss Schedule for September', sTitle: 'Secure Ledger Board', due_date: '9/12/2015', responsible: {name: 'Earnie Rutland', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Base '].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Follow Up on Code', sTitle: 'Secure Ledger Board', due_date: '-', responsible: {name: '-', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fire Sprinker Rough In'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Reminder to Input Bid', sTitle: 'Secure Ledger Board', due_date: '', responsible: {name: 'Brad Harrison', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Drywall'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Required Primer', sTitle: 'Secure Ledger Board', due_date: '-', responsible: {name: 'Mark Stevens', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Prime'].join(', '), status: ['Draft', '-']}
            ],
            listCompleted: [
                {flag: 'completed', title: 'Follow Up on Steel Support', sTitle: 'Secure Ledger Board', due_date: '7/21/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Set Steel'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Need to Install Sewer Pump', sTitle: 'Secure Ledger Board', due_date: '7/14/2015', responsible: {name: 'Christine Spendlove', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Rough Plumbing'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Complete Rough Electical', sTitle: 'Secure Ledger Board', due_date: '7/9/2015', responsible: {name: 'Mike Riley', company: 'ABC Inc'},initiator: {name: 'Mike Riley', company: 'ABC Inc'}, sow: ['Rough Electrical'].join(', '), status: ['Completed', 1]},
                {flag: 'canceled', title: 'What is a Submittal', sTitle: 'Secure Ledger Board', due_date: '6/26/2015', responsible: {name: 'Josh Kimball', company: 'ABC Inc'},initiator: {name: 'Steven Phillips', company: 'ABC Inc'}, sow: ['Submittals'].join(', '), status: ['Canceled', '-']}
            ]
        };

        $scope.changeOrder = {
            state: "action-items.change-order.main",
            title: "Change Order",
            total: 419,
            green: 171,
            orange: 155,
            red: 92,
            completed: {
                total: 419,
                done: 140
            },
            overview: {
                total: 1234567,
                in_process: {
                    count: 8,
                    amount: 2345
                },
                completed: {
                    count: 11,
                    amount: 32345876
                }
            },
            chart_data: [
                {
                    value: 11,
                    color: "#79c485"
                },
                {
                    value: 8,
                    color: "#f8ac59"
                }
            ],
            chart_options: {
                segmentShowStroke : false,
                percentageInnerCutout : 70, // This is 0 for Pie charts
                animationSteps : 100,
                animationEasing : "easeOutBounce",
                animateRotate : true,
                animateScale : false,
                showTooltips: false
            },
            assignedMe: {
                green: {
                    total: 61,
                    done: 40
                },
                orange: {
                    total: 49,
                    done: 20,
                },
                red: {
                    total: 33,
                    done: 28
                }
            },
            listRequiredByMe: [
                    {flag: 'red', title: 'Confirm Progress on Fireplace', type: "Secure Ledger Board", due_date: '8/16/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(", "), sow_completed: 24, amount: 56678, status: ['In Process', 0]},
                    {flag: 'red', title: 'Need Stairs Ready for Floor Lights', type: "Secure Ledger Board", due_date: '8/17/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Mary Beroset', company: 'ABC Inc'}, sow: ['Stairway Floor Lighting'].join(", "), sow_completed: 24, amount: 45766, status: ['In Process', 0.3]},
                    {flag: 'red', title: 'Close Garage Roof', due_date: '8/17/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: [''].join(', '), amount: 35654, status: ['In Process', 0.95]},
                    {flag: 'yellow', title: 'Decision on Ventilation ', type: "Secure Ledger Board", due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Dave Musgrove', company: 'ABC Inc'}, sow: [''].join(", "), sow_completed: 24, amount: 12234, status: ['In Process', 0]},
                    {flag: 'yellow', title: 'Confirm Completion of Dry-In', type: "Secure Ledger Board", due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Jeff Price', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(", "), sow_completed: 24, amount: 9089, status: ['pending', 0.25]},
                    {flag: 'yellow', title: 'Initiate Bid Process for Drywall', type: "Secure Ledger Board", due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Drywall'].join(", "), sow_completed: 24, amount: 61893, status: ['pending', 0]},
                    {flag: 'green', title: 'Clean Job Site', due_date: '-', type: "Secure Ledger Board", responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['-'].join(", "), sow_completed: 24, amount: 98731, status: ['In Process', 0]}
            ],
            listRequiredByOthers: [
                {flag: 'red', title: 'Submit Invoice for Additional Lumber', type: "Secure Ledger Board", due_date: '8/14/2015', responsible: {name: 'Dave Gebo', company: 'ABC Inc'},initiator: {name: 'Jeff Price', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(', '), sow_completed: 32, amount: 454543, status: ['In Process', 0.2]},
                {flag: 'red', title: 'Discuss Ventilation Options', due_date: '8/16/2015', responsible: {name: 'Dave Musgrove', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(', '), sow_completed: 32, amount: 12342, status: ['In Process', 0]},
                {flag: 'red', title: 'Complete Fireplace Framing', due_date: '8/17/2015', responsible: {name: 'John Steel', company: 'ABC Inc'},initiator: {name: 'John Steel', company: ''}, sow: ['Fireplace Install'].join(', '), sow_completed: 32, amount: 875656, status: ['In Process', 0.8]},
                {flag: 'yellow', title: 'Electrical Overview', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mary Beroset', company: 'ABC Inc'}, sow: ['Main Floor Overhead Lighting'].join(', '), sow_completed: 32, amount: 7633, status: ['In Process', 0.3]}
            ],
            listDrafts: [
                {flag: 'draft', title: 'Discuss Schedule for September', due_date: '9/12/2015', responsible: {name: 'Earnie Rutland', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Base '].join(', '), sow_completed: 32, amount: 278907, status: ['Draft', '-']},
                {flag: 'draft', title: 'Follow Up on Code', due_date: '-', responsible: {name: '-', company: ''},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fire Sprinker Rough In'].join(', '), sow_completed: 32, amount: 9765, status: ['Draft', '-']},
                {flag: 'draft', title: 'Reminder to Input Bid', type: "Secure Ledger Board", due_date: '', responsible: {name: 'Brad Harrison', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Drywall'].join(', '), sow_completed: 32, amount: 34566, status: ['Draft', '-']},
                {flag: 'draft', title: 'Required Primer', due_date: '-', responsible: {name: 'Mark Stevens', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Prime'].join(', '), sow_completed: 32, amount: 2097, status: ['Draft', '-']}
            ],
            listCompleted: [
                {flag: 'completed', title: 'Follow Up on Steel Support', type: "Secure Ledger Board", due_date: '7/21/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Set Steel'].join(', '), sow_completed: 32, amount: 7634, status: ['Completed', 1]},
                {flag: 'completed', title: 'Need to Install Sewer Pump', due_date: '7/14/2015', responsible: {name: 'Christine Spendlove', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Rough Plumbing'].join(', '), sow_completed: 32, amount: 54656, status: ['Completed', 1]},
                {flag: 'completed', title: 'Complete Rough Electical', type: "Secure Ledger Board", due_date: '7/9/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mike Riley', company: 'ABC Inc'}, sow: ['Rough Electrical'].join(', '), sow_completed: 32, amount: 87533, status: ['Completed', 1]},
                {flag: 'canceled', title: 'What is a Submittal', due_date: '6/26/2015', responsible: {name: 'Josh Kimball', company: ''},initiator: {name: 'Steven Phillips', company: 'ABC Inc'}, sow: ['Submittals'].join(', '), sow_completed: 32, amount: 1230, status: ['Canceled', '-']}
            ]
        };

        var punchList = {
            title: "Punch List",
            total: 5,
            green: 3,
            orange: 1,
            red: 1,
            completed: {
                total: 5,
                done: 0
            },
            assignedMe: {
                green: {
                    total: 1,
                    done: 0.2
                },
                orange: {
                    total: 1,
                    done: 0.5,
                },
                red: {
                    total: 1,
                    done: 0.7
                }
            }
        };

        $scope.inspections = {
            pieOptions: {
                type: 'pie',
                height: '120px',
                offset: -90,
                sliceColors: ['#fdae46', '#3aabd5', '#79c485'],
                disableTooltips: true
            },
            state: "action-items.inspections",
            title: "Inspection",
            total: 7,
            green: 6,
            orange: 1,
            red: 0,
            completed: {
                total: 8,
                done: 1
            },
            overview: {
                completed: 5,
                pending: 3,
                upcoming: 5,
                total: 13
            },
            assignedMe: {
                green: {
                    total: 2,
                    done: 0.4
                },
                orange: {
                    total: 1,
                    done: 0.3,
                },
                red: {
                    total: 0,
                    done: 0
                }
            },
            pendingList: [
                {
                    flag: 'red',
                    name: "Fuel Gas Piping",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Shane Rappleye",
                        company: "Arlington Gas Pipe Inc."
                    },
                    status: "Ready for Reinspection",
                    documents: 3,
                    date_completion: "Aug 11, 2015 / Aug 18, 2015",
                    order_by_date: "Aug 5, 2015",
                    next_inspection: "Aug 5, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'orange',
                    name: "Framing",
                    type: "Owner",
                    inspector: {
                        name: "Bruce Wayne",
                        company: ""
                    },
                    responsible: {
                        name: "Dan Bonker",
                        company: "Sage Creek Framing Co."
                    },
                    status: "Action Required",
                    documents: 1,
                    date_completion: "Aug 19, 2015 / Aug 23, 2015",
                    order_by_date: "Aug 18, 2015",
                    next_inspection: "Aug 20, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'green',
                    name: "4-Way Inspection",
                    type: "City",
                    inspector: {
                        name: "Mike Montgomery",
                        company: ""
                    },
                    responsible: {
                        name: "Bruce Wayne",
                        company: "Synergy Construction"
                    },
                    status: "Action Required",
                    documents: 2,
                    date_completion: "Aug 25, 2015 / Aug 29, 2015",
                    order_by_date: "Aug 21, 2015",
                    next_inspection: "Aug 25, 2015",
                    date_completed: "Aug 23, 2015"
                }
            ],
            upcomingList: [
                {
                    flag: 'green',
                    name: "Insulation",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Dave Gebo",
                        company: ""
                    },
                    status: "Scheduled",
                    documents: "-",
                    date_completion: "Sep 11, 2015 / Sep 12, 2015",
                    order_by_date: "Sep 9, 2015",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'green',
                    name: "Drywall",
                    type: "Owner",
                    inspector: {
                        name: "Bruce Wayne",
                        company: ""
                    },
                    responsible: {
                        name: "Dave Musgrove",
                        company: ""
                    },
                    status: "Scheduled",
                    documents: "-",
                    date_completion: "Oct 5, 2015 / Oct 10, 2015",
                    order_by_date: "Sep 30, 2015",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'green',
                    name: "Plumbing Final",
                    type: "City",
                    inspector: {
                        name: "William Wallance",
                        company: ""
                    },
                    responsible: {
                        name: "John Steel",
                        company: ""
                    },
                    status: "Needs to be Ordered",
                    documents: "-",
                    date_completion: "Oct 5, 2015 / Oct 11, 2015",
                    order_by_date: "Oct 1, 2015",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'green',
                    name: "Mechanical Final",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Dave Gebo",
                        company: ""
                    },
                    status: "Needs to be Ordered",
                    documents: "-",
                    date_completion: "-",
                    order_by_date: "-",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'green',
                    name: "Building Final",
                    type: "Final",
                    inspector: {
                        name: "Jill Scott",
                        company: ""
                    },
                    responsible: {
                        name: "Mike Hunter",
                        company: ""
                    },
                    status: "Needs to be Ordered",
                    documents: "-",
                    date_completion: "-",
                    order_by_date: "-",
                    next_inspection: "-",
                    date_completed: "-"
                }
            ],
            completedList: [
                {
                    flag: 'completed',
                    name: "Mechanical Rough In",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Mary Beroset",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 3,
                    date_completion: "Jul 16, 2015 / Jul 21, 2015",
                    order_by_date: "Jul 9, 2015",
                    next_inspection: "Jul 21, 2015",
                    date_completed: "4 of 4"
                },
                {
                    flag: 'completed',
                    name: "Plumbing Rough In",
                    type: "City",
                    inspector: {
                        name: "Ben Veromen",
                        company: ""
                    },
                    responsible: {
                        name: "Mike Riley",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 1,
                    date_completion: "Jun 24, 2015 / Jun 30, 2015",
                    order_by_date: "Jun 21, 2015",
                    next_inspection: "Jun 25, 2015",
                    date_completed: "11 of 11"
                },
                {
                    flag: 'completed',
                    name: "Roof Sheating & Shearwall",
                    type: "Owner",
                    inspector: {
                        name: "Bruce Wayne",
                        company: ""
                    },
                    responsible: {
                        name: "Mike Bearnson",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 1,
                    date_completion: "Apr 13, 2015 / Apr 15, 2015",
                    order_by_date: "Apr 2, 2015",
                    next_inspection: "Apr 14, 2015",
                    date_completed: "2 of 2"
                },
                {
                    flag: 'completed',
                    name: "Underfloor",
                    type: "Owner",
                    inspector: {
                        name: "Bruce Wayne",
                        company: ""
                    },
                    responsible: {
                        name: "Jim White",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 2,
                    date_completion: "Apr 5, 2015 / Apr 7, 2015",
                    order_by_date: "Mar 30, 2015",
                    next_inspection: "Apr 7, 2015",
                    date_completed: "3 of 3"
                },
                {
                    flag: 'completed',
                    name: "Footing & Foundation",
                    type: "Bank",
                    inspector: {
                        name: "Jill Scott",
                        company: ""
                    },
                    responsible: {
                        name: "Earnie Rutland",
                        company: ""
                    },
                    status: "Inspection Complete",
                    documents: 1,
                    date_completion: "Feb 20, 2015 / Feb 30, 2015",
                    order_by_date: "Feb 19, 2015",
                    next_inspection: "Feb 27, 2015",
                    date_completed: "9 of 9"
                }
            ],
            draftsList: [
                {
                    flag: 'edit',
                    name: "4-Way",
                    type: "",
                    inspector: {
                        name: "",
                        company: ""
                    },
                    responsible: {
                        name: "Bruce Wayne",
                        company: "Synergy Construction"
                    },
                    status: "Draft",
                    documents: 1,
                    date_completion: "-",
                    order_by_date: "Aug 21, 2015",
                    next_inspection: "-",
                    date_completed: "-"
                },
                {
                    flag: 'edit',
                    name: "Main Water Line",
                    type: "City",
                    inspector: {
                        name: "William Wallance",
                        company: ""
                    },
                    responsible: {
                        name: "Bruce Wayne",
                        company: "Synergy Construction"
                    },
                    status: "Draft",
                    documents: "-",
                    date_completion: "-",
                    order_by_date: "-",
                    next_inspection: "-",
                    date_completed: "-"
                }
            ]
        };


        $scope.round = function(val) {
            return Math.round(val);
        };

        $scope.goDetails = function(state) {
            $state.go(state);
        }

        $scope.go = function(state) {
            $state.go(state);
        }

        $scope.items.push($scope.gai);
        $scope.items.push($scope.rfi);
        $scope.items.push($scope.changeOrder);
        $scope.items.push(punchList);
        $scope.items.push($scope.inspections);

        // Inspection Table Gear Button
        $('body').on('shown.bs.dropdown', '.gear-dropdown', function () {
            var offsetRight = $(this).parentsUntil('.inspection-table').last().offset().left +
                              $(this).parentsUntil('.inspection-table').last().width() -
                              $(this).find('a.dropdown-toggle').offset().left -
                              $(this).find('a.dropdown-toggle').width();
            var offsetTop = $(this).find('a.dropdown-toggle').offset().top - $(this).parentsUntil('.inspection-table').last().offset().top

            $(this).find('ul.dropdown-menu').css('top', offsetTop + 10);
            $(this).find('ul.dropdown-menu').css('right', offsetRight + 10);
        });


        // Inspections

        // Action Main GAI New Modal
        $scope.showGaiNewModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/action-items/gai-new-modal.html',
                controller: 'GAINewModalCtrl',
                windowClass: 'gai-modal'
            });

            modalInstance.result.then(function(res) {

            }, function() {

            });
        }

    }]);
