app.controller('PhotoUploadModalCtrl',
    ['$scope', '$uibModalInstance', '$interval', '$timeout', function($scope, $uibModalInstance, $interval, $timeout) {

        $scope.dropzoneConfig = {
            url: '/upload',
            parallelUploads: 2,
            maxFileSize: 50,
            acceptedFiles: "image/jpeg, image/gif, image/png",
            clickable: '.btn-file-input',
            previewTemplate: $('.upload-preview').html(),
            previewsContainer: '#upload-files-container',
            dictMaxFilesExceeded: 'Uploaded files cannot exceed 50MB',
            accept: function(file) {
                var thumbnail = $(file.previewElement).find('span.preview img');

            }
        };

        $scope.photos = ['photo11.jpg', 'photo12.jpg', 'photo13.jpg', 'photo14.jpg', 'photo21.jpg', 'photo22.jpg', 'photo23.jpg', 'photo24.jpg', 'photo25.jpg', 'photo26.jpg'];

        $scope.files = [];

        $scope.isFirst = true;

        $interval(function() {
            _.each($scope.files, function(file) {
                if (file.upload_progress != 100 && !file.is_remove) {
                    file.upload_progress += 5;
                    file.bytes_sent = Math.round(file.size / 100 * file.upload_progress * 10) / 10;
                }
            });
        }, 300);

        $scope.deleteFile = function(file) {
            _.remove($scope.files, function(f) { return f.id == file.id; });
            return true;
        }

        $scope.dropzoneEventHandlers = {
            addedfile: function(file) {
                $scope.files.push({
                    id: _.uniqueId(),
                    name: file.name,
                    avatar: _.sample($scope.photos),
                    size: file.size / 1000,
                    upload_progress: 0,
                    bytes_sent: 0,
                    is_remove: false
                });
                $scope.$apply();

                if ($scope.isFirst) {
                    $('.progress-upload ul').mCustomScrollbar({
                        theme: 'dark'
                    });
                    $scope.isFirst = false;
                }


            },

            drop: function(event) {
                $('.drag-drop .modal-content').removeClass('drag-enter');
            },

            dragenter: function(event) {
                $('.drag-drop .modal-content').addClass('drag-enter');
            },

            dragover: function(event) {
                $('.drag-drop .modal-content').addClass('drag-enter');
            },

            dragleave: function(event) {
                $('.drag-drop .modal-content').removeClass('drag-enter');
            },

            cancel: function(file) {
            }
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }])
