(function () {
    'use strict';
    var getAccountant = 'accountant';
    

    angular.module('app').controller(getAccountant, ['common','datacontext', accountant]);
   
   

    function accountant(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getAccountant);

        var vm = this;
        vm.accountants = [];
        vm.title = 'Accountant';

        activate();

        function activate() {
            var promises = [getAccountants()];
            common.activateController(promises, getAccountants)
                .then(function () { log('Activated Accountant View'); });
        }

        function getAccountants() {
            return datacontext.getAccountants().then(function (data) {
                vm.accountants = data.$values;
                console.log(vm.accountants);
                return vm.accountants;

            });
        }
       
    }


   
    
})();
