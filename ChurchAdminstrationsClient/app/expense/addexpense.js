(function () {
    'use strict';
    
    var addExpense = 'addexpense';

    
    angular.module('app').controller(addExpense, ['common', 'datacontext', '$scope', addexpense]);

    function addexpense(common, datacontext,$scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addExpense);

        var vm = this;
        vm.title = 'Add Expense';
       
        //vm.members = [];
        activate();

       

        

        $scope.save = function () {
            var currentexpense = $scope.newexpense;
            datacontext.saveExpense(currentexpense);
            $scope.message = 'New Expense saved';

        }

        function activate() {
           
            common.activateController([], addExpense)
                .then(function () { log('Activated Add Expense View'); });
        }




       
    }


   





    
                




})();
