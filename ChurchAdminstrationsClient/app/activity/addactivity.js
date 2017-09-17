(function () {
    'use strict';
    
    var addActivity = 'addactivity';

    
    angular.module('app').controller(addActivity, ['common', 'datacontext', '$scope', addactivity]);

    function addactivity(common, datacontext,$scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addActivity);

        var vm = this;
        vm.title = 'Add Activity';
        vm.activitycategories = [];
        vm.groups = [];
        vm.venues = [];
       
        //vm.members = [];
        activate();

       

        

        $scope.save = function () {
            var currentactivity = $scope.newactivity;
            datacontext.saveActivity(currentactivity);
            $scope.message = 'New Activity saved';

        }

        function activate() {
            var promises = [getActivityCategories(), getGroups(), getVenues()];
            common.activateController(promises, addActivity)
                .then(function () { log('Activated Add Activity View'); });
        }


        function getActivityCategories() {
            return datacontext.getActivityCategories().then(function (data) {
                vm.activitycategories = data.$values;
                console.log(vm.activitycategories);
                return vm.activitycategories;

            });
        }

        function getGroups() {
            return datacontext.getGroups().then(function (data) {
                vm.groups = data.$values;
                console.log(vm.groups);
                return vm.groups;

            });
        }

        function getVenues() {
            return datacontext.getVenues().then(function (data) {
                vm.venues = data.$values;
                console.log(vm.venues);
                return vm.venues;

            });
        }
       
    }


   





    
                




})();
