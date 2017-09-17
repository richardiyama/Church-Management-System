(function () {
    'use strict';

    var deleteVenue = 'deletevenue';


    angular.module('app').controller(deleteVenue, ['common', 'datacontext', '$scope', '$http', '$routeParams', deletevenue]);

    function deletevenue(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(deleteVenue);

        var vm = this;
        vm.title = 'Delete Venue';




        activate();



        function activate() {
            var promises = [Delete()];
            common.activateController(promises, deleteVenue)
                .then(function () { log('Activated Delete Venue View'); });
        }



        function Delete() {

           

            $http.get('http://localhost:58376/api/Venue/' + $routeParams.VenueId).then(function (response) {

                    $scope.newvenue = response.data;
                });


            $scope.removeVenue = function (data) {


                $http.delete('http://localhost:58376/api/Venue/' + $routeParams.VenueId, data).then(function (data) {

                
                    $scope.newvenue.venueTitle = "";

                    $scope.newvenue.capacity = "";
                    $scope.newvenue.requestBefore = "";
                    $scope.newvenue.equipment = "";
                    $scope.newvenue.multipleReservation = "";

                    alert("Venue deleted");
                });

            };

        }


    }



})();
