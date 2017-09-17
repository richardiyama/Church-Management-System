(function () {
    'use strict';

    var deleteSermon = 'deletesermon';


    angular.module('app').controller(deleteSermon, ['common', 'datacontext', '$scope', '$http', '$routeParams', deletesermon]);

    function deletesermon(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(deleteSermon);

        var vm = this;
        vm.title = 'Delete Member';
       



        activate();



        function activate() {
            var promises = [Delete()];
            common.activateController(promises, deleteSermon)
                .then(function () { log('Activated Delete Sermon View'); });
        }



        function Delete() {

            $http.get('http://localhost:58376/api/Sermon/' + $routeParams.SermonId).then(function (response) {

                $scope.newsermon = response.data;

               
            });

           
            $scope.removeSermon = function (data) {


                $http.delete('http://localhost:58376/api/Sermon/' + $routeParams.SermonId, data).then(function (data) {



                    $scope.newsermon.sermonTitle = "";

                    $scope.newsermon.sermonType = "";
                    $scope.newsermon.status = "";

                     $scope.newsermon.description = "";

                    $scope.newsermon.fileSource = "";
                    


                    alert("Sermon deleted");
                });

            };

        }


    }



})();
