app.controller('BankDrawFinalizeCtrl',
    ['$scope', '$state', function ($scope, $state) {
        $scope.$parent.setCurrentStep($state.current.name);

        $scope.summary_results = [
          {
            "payee": "General Conditions",
            "complaint_count": 1,
            "complaint_amount": "$20,358.00 ",
            "uncomplaint_count": '-',
            "uncomplaint_amount": "-",
            "total_count": 1,
            "total_amount": "$20,358.00 "
          },
          {
            "payee": "Subcontractors",
            "complaint_count": 5,
            "complaint_amount": "$153,123.34",
            "uncomplaint_count": 1,
            "uncomplaint_amount": "$2,139.01",
            "total_count": 6,
            "total_amount": "$155,262.35"
          },
          {
            "payee": "Suppliers",
            "complaint_count": '-',
            "complaint_amount": "-",
            "uncomplaint_count": '-',
            "uncomplaint_amount": "-",
            "total_count": '-',
            "total_amount": "-"
          },
          {
            "payee": "Miscellaneous",
            "complaint_count": 4,
            "complaint_amount": "$5,646.49 ",
            "uncomplaint_count": '-',
            "uncomplaint_amount": "-",
            "total_count": 4,
            "total_amount": "$5,646.49 "
          },
          {
            "payee": "Total",
            "complaint_count": 10,
            "complaint_amount": "$179,127.83 ",
            "uncomplaint_count": 1,
            "uncomplaint_amount": "$2,139.01 ",
            "total_count": 11,
            "total_amount": "$181,266.84 "
          }
        ];
    }]);
