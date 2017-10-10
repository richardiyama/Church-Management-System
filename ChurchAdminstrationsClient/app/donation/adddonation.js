(function () {
    'use strict';

    var addDonation = 'adddonation';


    angular.module('app').controller(addDonation, ['common', 'datacontext', '$scope', adddonation]);

    function adddonation(common, datacontext, $scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addDonation);

        var vm = this;
        vm.title = 'Add Donation';
        vm.donations = [];

        //vm.members = [];
        activate();


        $scope.save = function () {
            var currentdonation = $scope.newdonation;
            datacontext.saveDonation(currentdonation);
            $scope.message = 'New Donation saved';

        }

        function activate() {
            var promises = [getMembers()];
            common.activateController(promises, addDonation)
                .then(function () { log('Activated Add Donation View'); });
        }



        function getMembers() {
            return datacontext.getMembers().then(function (data) {
                vm.members = data.$values;
                console.log(vm.members);
                return vm.members;

            });
        }


    }














})();
