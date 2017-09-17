(function () {
    'use strict';

    var editGroup = 'editgroup';


    angular.module('app').controller(editGroup, ['common', 'datacontext', '$scope','$http', '$routeParams',editgroup]);

    function editgroup(common, datacontext,$scope,$http,$routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editGroup);

        var vm = this;
        vm.title = 'Edit Group';
        

        

        activate();
        
       
       
        function activate() {
            var promises = [Edit()];
            common.activateController(promises, editGroup)
                .then(function () { log('Activated Edit Group View'); });
        }




        function Edit() {
           
            $http.get('http://localhost:58376/api/Group/' + $routeParams.GroupId).then(function (response) {

                $scope.newgroup = response.data;
            })

            $scope.updateGroup = function () {
                var data = {
                    GroupID: $routeParams.GroupId,
                    MemberID: $routeParams.GroupId,
                    GroupName: $scope.newgroup.groupName,
                    
                    ImageSource: $scope.newgroup.imageSource
               

                }

                $http.put('http://localhost:58376/api/Group/' + $routeParams.GroupId, data).then(function (data, status) {

                    console.log(status);
                })

            }

        }


    }




})();
