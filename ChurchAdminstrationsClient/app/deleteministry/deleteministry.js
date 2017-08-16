(function () {
    'use strict';

    var deleteMinistry = 'deleteministry';


    angular.module('app').controller(deleteMinistry, ['common', 'datacontext', '$scope', '$http', '$routeParams', deleteministry]);

    function deleteministry(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(deleteMinistry);

        var vm = this;
        vm.title = 'Delete Ministry';




        activate();



        function activate() {
            var promises = [Delete()];
            common.activateController(promises, deleteMinistry)
                .then(function () { log('Activated Delete Group View'); });
        }



        function Delete() {

            $http.get('http://localhost:58376/api/Ministry/' + $routeParams.MinistryId).then(function (response) {

                $scope.newministry = response.data;
            })

            $scope.removeMinistry = function (data) {


                $http.delete('http://localhost:58376/api/Ministry/' + $routeParams.MinistryId, data).then(function (data) {

                    $scope.newministry.ministryName = "";



                    $scope.newministry.imageSource = "";



                    alert("Ministry deleted");
                })

            }

        }


    }



})();
