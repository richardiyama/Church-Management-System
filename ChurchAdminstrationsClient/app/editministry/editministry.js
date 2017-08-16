(function () {
    'use strict';

    var editMinistry = 'editministry';


    angular.module('app').controller(editMinistry, ['common', 'datacontext', '$scope', '$http', '$routeParams', editministry]);

    function editministry(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editMinistry);

        var vm = this;
        vm.title = 'Edit Ministry';




        activate();



        function activate() {
            var promises = [Edit()];
            common.activateController(promises, editMinistry)
                .then(function () { log('Activated Edit Ministry View'); });
        }




        function Edit() {

            $http.get('http://localhost:58376/api/Ministry/' + $routeParams.MinistryId).then(function (response) {

                $scope.newministry = response.data;
            })

            $scope.updateMinistry = function () {
                var data = {
                    MinistryID: $routeParams.MinistryId,
                    MemberID: $routeParams.MinistryId,

                    MinistryName: $scope.newministry.ministryName,

                    ImageSource: $scope.newministry.imageSource


                }

                $http.put('http://localhost:58376/api/Ministry/' + $routeParams.MinistryId, data).then(function (data, status) {

                    console.log(status);
                })

            }

        }


    }




})();
