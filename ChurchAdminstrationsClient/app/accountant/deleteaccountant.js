(function () {
    'use strict';

    var deleteAccountant = 'deleteaccountant';


    angular.module('app').controller(deleteAccountant, ['common', 'datacontext', '$scope', '$http', '$routeParams', deleteaccountant]);

    function deleteaccountant(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(deleteAccountant);

        var vm = this;
        vm.title = 'Delete Accountant';
       



        activate();



        function activate() {
            var promises = [Delete()];
            common.activateController(promises, deleteAccountant)
                .then(function () { log('Activated Delete Accountant View'); });
        }



        function Delete() {

            $http.get('http://localhost:58376/api/Accountant/' + $routeParams.AccountantId).then(function (response) {

                $scope.newaccountant = response.data;

               
            });

           
            $scope.removeAccountant = function (data) {


                $http.delete('http://localhost:58376/api/Accountant/' + $routeParams.AccountantId, data).then(function (data) {


                    $scope.newaccountant.photo = "";
                    $scope.newaccountant.staffMemberName = "";

                    $scope.newaccountant.staffMemberEmail = "";

                    $scope.newaccountant.mobileNo = "";

                 


                    alert("Accountant deleted");
                });

            };

        }


    }



})();
