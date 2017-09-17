(function () {
    'use strict';
    var getExpense = 'expense';
    

    angular.module('app').controller(getExpense, ['common','datacontext', expense]);
    
       

    function expense(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getExpense);

        var vm = this;
        vm.expenses = [];
        vm.title = 'Expense';

        activate();

        function activate() {
            var promises = [getExpenses()];
            common.activateController(promises, getExpense)
                .then(function () { log('Activated Expense View'); });
        }

        function getExpenses() {
            return datacontext.getExpenses().then(function (data) {
                vm.expenses = data.$values;
                console.log(vm.expenses);
                return vm.expenses;

            });
        }
       
    }


   
    
})();
