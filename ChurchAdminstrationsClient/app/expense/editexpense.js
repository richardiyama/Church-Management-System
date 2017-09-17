(function () {
    'use strict';

    var editExpense = 'editexpense';


    angular.module('app').controller(editExpense, ['common', 'datacontext', '$scope', '$http', '$routeParams', editexpense]);

    function editvenue(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editExpense);

        var vm = this;
        vm.title = 'Edit Expense';




        activate();



        function activate() {
            var promises = [Edit()];
            common.activateController(promises, editExpense)
                .then(function () { log('Activated Edit Expense View'); });
        }




        function Edit() {

            $http.get('http://localhost:58376/api/Expense/' + $routeParams.ExpenseId).then(function (response) {

                $scope.newexpense = response.data;
            })

            $scope.updateExpense = function () {
                var data = {
                    ExpenseID: $routeParams.ExpenseId,
                    SupplierName: $scope.newexpense.supplierName,

                    Status: $scope.newexpense.status,
                    Date: $scope.newexpense.date,
                    ExpenseAmount: $scope.newexpense.expenseAmount
                   
                }

                $http.put('http://localhost:58376/api/Expense/' + $routeParams.ExpenseId, data).then(function (data, status) {

                    console.log(status);
                })

            }

        }


    }




})();
