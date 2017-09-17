(function () {
    'use strict';
    var getActivityCategory = 'activitycategory';
    

    angular.module('app').controller(getActivityCategory, ['common','datacontext', activitycategory]);
    

    function activitycategory(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getActivityCategory);

        var vm = this;
        vm.activitycategories = [];
        vm.title = 'Activity Category';

        activate();

        function activate() {
            
            common.activateController([], getActivityCategory)
                .then(function () { log('Activated Activity Category View'); });

        }

        function getActivityCategories() {
            return datacontext.getActivityCategories().then(function (data) {
                vm.activitycategories = data.$values;
                console.log(vm.activities);
                return vm.activitycategories;

            });
        }
       
    }


   
    
})();
