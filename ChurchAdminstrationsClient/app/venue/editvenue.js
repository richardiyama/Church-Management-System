(function () {
    'use strict';

    var editVenue = 'editvenue';


    angular.module('app').controller(editVenue, ['common', 'datacontext', '$scope','$http', '$routeParams',editvenue]);

    function editvenue(common, datacontext,$scope,$http,$routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editVenue);

        var vm = this;
        vm.title = 'Edit Venue';
        

        

        activate();
        
       
       
        function activate() {
            var promises = [Edit()];
            common.activateController(promises, editVenue)
                .then(function () { log('Activated Edit Venue View'); });
        }




        function Edit() {
           
            $http.get('http://localhost:58376/api/Venue/' + $routeParams.VenueId).then(function (response) {

                $scope.newvenue = response.data;
            })

            $scope.updateVenue = function () {
                var data = {
                    VenueID: $routeParams.VenueId,
                    VenueTitle: $scope.newvenue.venueTitle,
                    
                    Capacity: $scope.newvenue.capacity,
                    RequestBefore: $scope.newvenue.requestBefore,
                    Equipment: $scope.newvenue.equipment,
                    MultipleReservation: $scope.newvenue.multipleReservation
               

                }

                $http.put('http://localhost:58376/api/Venue/' + $routeParams.VenueId, data).then(function (data, status) {

                    console.log(status);
                })

            }

        }


    }




})();
