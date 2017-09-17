(function () {
    'use strict';

    var editPastoral = 'editpastoral';


    angular.module('app').controller(editPastoral, ['common', 'datacontext', '$scope','$http', '$routeParams',editpastoral]);

    function editpastoral(common, datacontext,$scope,$http,$routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editPastoral);

        var vm = this;
        vm.title = 'Edit Pastoral';
        vm.members = [];
        

        

        activate();
        
       
       
        function activate() {
            var promises = [getMembers(),Edit()];
            common.activateController(promises, editPastoral)
                .then(function () { log('Activated Edit Pastoral View'); });
        }

        function getMembers() {
            return datacontext.getMembers().then(function (data) {
                vm.members = data.$values;
                console.log(vm.members);
                return vm.members;

            });
        }

    


        function Edit() {
           
            $http.get('http://localhost:58376/api/Pastoral/' + $routeParams.PastoralId).then(function (response) {

                $scope.newpastoral = response.data;

                $http.get('http://localhost:58376/api/Member/' + $scope.newmember.memberID).then(function (response) {

                    $scope.newmember = response.data;
                });
            })

            $scope.updatePastoral = function () {
                var data = {
                    PastoralID: $routeParams.PastoralId,
                    MemberID: $scope.newmember.memberID,
                    Description: $scope.newpastoral.description,
                    
                    PastoralDate: $scope.newpastoral.pastoralDate,
                    PastoralTime: $scope.newpastoral.pastoralTime
               

                }

                $http.put('http://localhost:58376/api/Pastoral/' + $routeParams.PastoralId, data).then(function (data, status) {

                    console.log(status);
                })

            }

        }


    }




})();
