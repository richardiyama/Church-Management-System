(function () {
    'use strict';

    var addAccountant = 'addaccountant';


    angular.module('app').controller(addAccountant, ['common', 'datacontext', '$scope', addaccountant]);

    function addaccountant(common, datacontext, $scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addAccountant);

        var vm = this;
        vm.title = 'Add Accountant';
        vm.members = [];
       
        //vm.members = [];
        activate();


        $scope.save = function () {
            var currentaccountant = $scope.newaccountant;
            datacontext.saveAccountant(currentaccountant);
            $scope.message = 'New Accountant saved';

        }

        function activate() {
            var promises = [getMembers()];
            common.activateController(promises, addAccountant)
                .then(function () { log('Activated Add Accountant View'); });
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
