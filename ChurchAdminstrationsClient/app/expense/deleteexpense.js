(function () {
    'use strict';

    var deleteExpense = 'deleteexpense';


    angular.module('app').controller(deleteExpense, ['common', 'datacontext', '$scope', '$http', '$routeParams', deleteexpense]);

    function deleteexpense(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(deleteExpense);

        var vm = this;
        vm.title = 'Delete Expense';
       



        activate();



        function activate() {
            var promises = [Delete()];
            common.activateController(promises, deleteExpense)
                .then(function () { log('Activated Delete Expense View'); });
        }



        function Delete() {

            $http.get('http://localhost:58376/api/Expense/' + $routeParams.VenueId).then(function (response) {

                $scope.newexpense = response.data;
            });


            $scope.removeExpense = function (data) {


                $http.delete('http://localhost:58376/api/Expense/' + $routeParams.ExpenseId, data).then(function (data) {


                    $scope.newexpense.supplierName = "";

                    $scope.newexpense.status = "";
                    $scope.newexpense.date = "";
                    $scope.newexpense.expenseAmount = "";
                    

                    alert("Expense deleted");
                });

            };

        }


    }



})();
