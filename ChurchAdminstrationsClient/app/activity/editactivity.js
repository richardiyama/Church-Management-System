(function () {
    'use strict';

    var editActivity = 'editactivity';


    angular.module('app').controller(editActivity, ['common', 'datacontext', '$scope','$http', '$routeParams',editactivity]);

    function editactivity(common, datacontext,$scope,$http,$routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editActivity);

        var vm = this;
        vm.title = 'Edit Activity';
        vm.activitycategories = [];
        vm.groups = [];
        vm.venues = [];
        

        

        activate();
        
       
       
        function activate() {
            var promises = [getActivityCategories(), getGroups(), getVenues(),Edit()];
            common.activateController(promises, editActivity)
                .then(function () { log('Activated Edit Activity View'); });
        }


        function getActivityCategories() {
            return datacontext.getActivityCategories().then(function (data) {
                vm.activitycategories = data.$values;
                console.log(vm.activitycategories);
                return vm.activitycategories;

            });
        }

        function getGroups() {
            return datacontext.getGroups().then(function (data) {
                vm.groups = data.$values;
                console.log(vm.groups);
                return vm.groups;

            });
        }

        function getVenues() {
            return datacontext.getVenues().then(function (data) {
                vm.venues = data.$values;
                console.log(vm.venues);
                return vm.venues;

            });
        }


        function Edit() {
           
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

            })

            $scope.updateActivity = function () {
                var data = {
                    ActivityID: $routeParams.ActivityId,
                    GroupID: $scope.newactivity.groupID,
                    ActivityName: $scope.newactivity.activityName,
                    
                    ActivityType: $scope.newactivity.activityType,
                    GuestSpeaker: $scope.newactivity.guestSpeaker,

                    Reoccurrance: $scope.newactivity.reoccurrance,

                    AllDay: $scope.newactivity.allDay,

                    StartTime: $scope.newactivity.startTime,
                    EndTime: $scope.newactivity.endTime,

                    ActivityDate: $scope.newactivity.activityDate,

                    EndDate: $scope.newactivity.endDate,
                    ActivityCategoryID: $scope.newactivity.activityCategoryID,
                    VenueID: $scope.newactivity.venueID

                }

                $http.put('http://localhost:58376/api/Activity/' + $routeParams.ActivityId, data).then(function (data, status) {

                    console.log(status);
                })

            }

        }


    }




})();
