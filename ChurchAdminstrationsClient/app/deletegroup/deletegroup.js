(function () {
    'use strict';

    var deleteGroup = 'deletegroup';


    angular.module('app').controller(deleteGroup, ['common', 'datacontext', '$scope', '$http', '$routeParams', deletegroup]);

    function deletegroup(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(deleteGroup);

        var vm = this;
        vm.title = 'Delete Group';
       



        activate();



        function activate() {
            var promises = [Delete()];
            common.activateController(promises, deleteGroup)
                .then(function () { log('Activated Delete Group View'); });
        }



        function Delete() {

            $http.get('http://localhost:58376/api/Group/' + $routeParams.GroupId).then(function (response) {

                $scope.newgroup = response.data;
            })

            $scope.removeGroup = function (data) {
                

                $http.delete('http://localhost:58376/api/Group/' + $routeParams.GroupId, data).then(function (data) {

                    $scope.newgroup.groupName = "";

                  
                    
                    $scope.newgroup.imageSource = "";
                    


                    alert("Group deleted");
                })

            }

        }


    }



})();
