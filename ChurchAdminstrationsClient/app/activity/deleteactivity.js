(function () {
    'use strict';

    var deleteActivity = 'deleteactivity';


    angular.module('app').controller(deleteActivity, ['common', 'datacontext', '$scope', '$http', '$routeParams', deleteactivity]);

    function deleteactivity(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(deleteActivity);

        var vm = this;
        vm.title = 'Delete Activity';
       



        activate();



        function activate() {
            var promises = [Delete()];
            common.activateController(promises, deleteActivity)
                .then(function () { log('Activated Delete Activity View'); });
        }



        function Delete() {

            $http.get('http://localhost:58376/api/Activity/' + $routeParams.ActivityId).then(function (response) {

                $scope.newactivity = response.data;

                $http.get('http://localhost:58376/api/Venue/' + $scope.newactivity.venueID).then(function (response) {

                    $scope.newvenue = response.data;
                });

                $http.get('http://localhost:58376/api/Group/' + $scope.newactivity.groupID).then(function (response) {

                    $scope.newgroup = response.data;
                });

                $http.get('http://localhost:58376/api/ActivityCategory/' + $scope.newactivity.activityCategoryID).then(function (response) {

                    $scope.newactivitycategory = response.data;
                });

            });

           
            $scope.removeActivity = function (data) {


                $http.delete('http://localhost:58376/api/Activity/' + $routeParams.ActivityId, data).then(function (data) {




                    $scope.newvenue.venueTitle = "";
                    $scope.newactivitycategory.activityCategoryName = "";


                    $scope.newgroup.groupName = "";
                    $scope.newactivity.activityName = "";

                    $scope.newactivity.activityType = "";

                    $scope.newactivity.guestSpeaker = "";


                    $scope.newactivity.reoccurrance = "";


                    $scope.newactivity.allDay = "";


                    $scope.newactivity.startTime = "";


                    $scope.newactivity.endTime = "";


                    $scope.newactivity.activityDate = "";


                    $scope.newactivity.endDate = "";



                   



                    alert("Activity deleted");
                });

            };

        }


    }



})();
