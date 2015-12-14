app.controller('ProjectStartCtrl' ,
    ['$scope', function ($scope) {

        $scope.typeOfProject = [
            {
                id: 1,
                name: 'Residental'
            }, {
                id: 2,
                name: 'Multi-Unit'
            }, {
                id: 3,
                name: 'Commercial'
        }];

        $scope.bestDescriptions = [
            {
                id: 1,
                name: 'Condominium'
            }, {
                id: 1,
                name: 'Apartment'
            }, {
                id: 1,
                name: 'Duplex'
        }];

        $scope.countries = [
            {
                id: 1,
                name: 'United States'
            }, {
                id: 2,
                name: 'United Kingdom'
            }, {
                id: 3,
                name: 'Canada'
            }, {
                id: 4,
                name: 'Australia'
            }, {
                id: 5,
                name: 'Germany'
        }];

        $scope.states = [
            {
                id: 1,
                name: 'Alabama'
            }, {
                id: 2,
                name: 'Alaska'
            }, {
                id: 3,
                name: 'California'
            }, {
                id: 4,
                name: 'New York'
            }, {
                id: 5,
                name: 'Texas'
            }, {
                id: 6,
                name: 'Florida'
            }, {
                id: 7,
                name: 'Hawaii'
        }];

        $scope.roles = [
            {
                id: 1,
                name: 'Banker'
            }, {
                id: 2,
                name: 'Developer'
            }, {
                id: 3,
                name: 'General Contractor'
            }, {
                id: 4,
                name: 'Owner'
        }];

        $scope.haveArchPlans = false;

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
