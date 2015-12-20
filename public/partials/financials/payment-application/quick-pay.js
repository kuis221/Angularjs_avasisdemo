app.controller('QuickPayCtrl',
    ['$scope', function($scope) {

        $scope.projects = [
            {
                id: 1,
                name: "Wood Foullish"
            }
        ];

        $scope.payApplications = [
            {
                id: 1,
                name: 'Demilis'
            }
        ];

        $scope.contracts = [
            {
                id: 1,
                name: 'Belsoeis'
            }
        ];

        $scope.sows = [
            {
                id: 1,
                name: 'Eaielsels'
            }
        ];


        $scope.classifications = [
            {
                id: 1,
                name: 'Desates'
            }
        ];

        $scope.payee = [
            {
                id: 1,
                name: 'Miles boke'
            }, {
                id: 2,
                name: 'Halm homes'
            }

        ]


        $scope.data = [
            {
                budgetted: false
            }
        ];

        $scope.addLine = function() {
            $scope.data.push({
                budgetted: false
            });
        };

        $scope.paymentForm = [
            {
                id: 1,
                name: 'Payment Form'
            }
        ];

        /** Dropzone config
        *
        */
        $scope.dropzoneConfig = {
            url: '/upload',
            parallelUploads: 2,
            maxFileSize: 30,
            acceptedFiles: "image/*,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/xml",
            clickable: '.btn-file-input',
            previewTemplate: $('.upload-preview').html(),
            previewsContainer: '#upload-files-container',
            accept: function(file) {
                var thumbnail = $(file.previewElement).find('span.preview img');
                switch (file.type) {
                    case 'application/pdf':
                        thumbnail.attr('src', "assets/img/documents/icons/pdf_file.png");
                        $(file.previewElement).find('span.preview').addClass('not-image');
                        break;
                    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                        thumbnail.attr('src', "assets/img/documents/icons/text_file.png");
                        $(file.previewElement).find('span.preview').addClass('not-image');
                        break;
                }
            }
        };

        $scope.dropzoneEventHandlers = {
            addedfile: function(file) {
            },
            thumbnail: function(file, dataUrl) {
            },
        };
    }]);
