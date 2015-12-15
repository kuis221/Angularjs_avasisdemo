app.directive('folderSlider', function ($compile, $timeout) {
    return {
        restrict: 'E',
        templateUrl: 'content/js/directives/folder-slider.html',
        link: function (scope, element, attrs) {
            $timeout(function () {
                var $frame  = $('#basic');
                var $slidee = $frame.children('ul').eq(0);
                var $wrap   = $frame.parent();
                var foldername = '<div class=add-name><i class=\"remove fa fa-times-circle\"></i><i class=\"accept fa fa-check-circle\"></i><input id=new-name value=\"Folder Name\" /></div>'
                var newitem = '<li class=\"new animated fadeInLeft\">' + foldername + '<div class=mask><div class=folder-name>'+ 'Folder Name' +'</div><div class=folder-date>'+ 'Nov 13, 2015' +'</div><div class=folder-number-photos>'+ 'No Photos' +'</div></div></li>';

                // Call Sly on frame
                $frame.sly({
                    horizontal: 1,
                    itemNav: 'basic',
                    smart: 1,
                    activateOn: 'click',
                    mouseDragging: 1,
                    touchDragging: 1,
                    releaseSwing: 1,
                    startAt: null,
                    scrollBar: $wrap.find('.scrollbar'),
                    scrollBy: 1,
                    pagesBar: $wrap.find('.pages'),
                    activatePageOn: 'click',
                    speed: 300,
                    elasticBounds: 1,
                    easing: 'easeOutExpo',
                    dragHandle: 1,
                    dynamicHandle: 1,
                    clickBar: 1,

                    // Buttons
                    forward: $wrap.find('.forward'),
                    backward: $wrap.find('.backward'),
                    prevPage: $wrap.find('.prevPage'),
                    nextPage: $wrap.find('.nextPage')
                });

                // Add item
                scope.addFolder = function() {
                    $frame.sly('add', newitem, 0);
                    return false;
                };

                // Remove item
                $('body').on('click', '.add-name .remove', function(){
                });

                $('body').on('click', '.add-name .accept', function(){
                    var folderName = $(this).next().val();
                    $(this).closest('.add-name').slideUp(function() {
                        if (folderName != '')
                            $(this).parent().find('.mask .folder-name').html(folderName);
                        $(this).parent().find('.mask').slideDown();
                    });
                });


                // change name folder
                $wrap.find('.frame').on('click', '.new', function(e){
                    var content = this;
                    $('.mask', content).slideUp(function(){
                        $('.add-name', content).slideDown();
                    });

                    e.preventDefault();
                });
            }, 100);

        }
    };
});
