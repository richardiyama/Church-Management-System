(function () {
    'use strict';
    var getActivity = 'activity';
    

    angular.module('app').controller(getActivity, ['common','datacontext', activity]);
    

    function activity(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getActivity);

        var vm = this;
        vm.activities = [];
        vm.title = 'Activity';

        activate();

        function activate() {
            var promises = [getActivities()];
            common.activateController(promises, getActivity)
                .then(function () { log('Activated Activity View'); });
        }

        function getActivities() {
            return datacontext.getActivities().then(function (data) {
                vm.activities = data.$values;
                console.log(vm.activities);
                return vm.activities;

            });
        }
       
    }


   
    
})();
