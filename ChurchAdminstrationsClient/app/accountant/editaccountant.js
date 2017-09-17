(function () {
    'use strict';

    var editAccountant = 'editaccountant';


    angular.module('app').controller(editAccountant, ['common', 'datacontext', '$scope','$http', '$routeParams',editaccountant]);

    function editaccountant(common, datacontext,$scope,$http,$routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editAccountant);

        var vm = this;
        vm.title = 'Edit Accountant';
        

        

        activate();
        
       
       
        function activate() {
            var promises = [Edit()];
            common.activateController(promises, editAccountant)
                .then(function () { log('Activated Edit Accountant View'); });
        }




        function Edit() {
           
            $http.get('http://localhost:58376/api/Accountant/' + $routeParams.AccountantId).then(function (response) {

                $scope.newaccountant = response.data;
            })

            $scope.updateAccountant = function () {
                var data = {
                    AccountantID: $routeParams.AccountantId,
                    MemberID: $routeParams.AccountantId,

                    Photo: $scope.newaccountant.photo,

                    StaffMemberName: $scope.newaccountant.staffMemberName,
                    
                    StaffMemberEmail: $scope.newaccountant.staffMemberEmail,
                    MobileNo: $scope.newaccountant.mobileNo

                }

                $http.put('http://localhost:58376/api/Accountant/' + $routeParams.AccountantId, data).then(function (data, status) {

                    console.log(status);
                })

            }

        }


    }




})();
