(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', '$http','$routeParams', datacontext]);

    function datacontext(common, $http,$routeParams) {
        var $q = common.$q;
        

        //$http = common.$http;
        //var $scope = common.$scope;
        var service = {
            getPeople: getPeople,
            getPastorals: getPastorals,
            getSermons: getSermons,
            getSongs: getSongs,
            getExpenses: getExpenses,
            getMessageCount: getMessageCount,
            getMinstries: getMinstries,
            getAccountants: getAccountants,
            getGroups: getGroups,
            getMembers: getMembers,
            getVenues: getVenues,
            saveMember: saveMember,
            saveGroup: saveGroup,
            getActivities: getActivities,
            getActivityCategories: getActivityCategories,
            saveMinistry: saveMinistry,
            saveAccountant: saveAccountant,
            saveActivityCategory: saveActivityCategory,
            saveActivity: saveActivity,
            saveVenue: saveVenue,
            saveExpense: saveExpense,
            saveSermon: saveSermon,
            saveSong: saveSong,
            savePastoral: savePastoral
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function savePastoral(newpastoral, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Pastoral",
                data: newpastoral
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }

        function saveSong(newsong, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Song",
                data: newsong
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }


        function saveSermon(newsermon, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Sermon",
                data: newsermon
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }


        function saveExpense(newexpense, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Expense",
                data: newexpense
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }


        function saveVenue(newvenue, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Venue",
                data: newvenue
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }

        function saveActivity(newactivity, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Activity",
                data: newactivity
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }

        function saveActivityCategory(newactivitycategory, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/ActivityCategory",
                data: newactivitycategory
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }


        function saveAccountant(newaccountant, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Accountant",
                data: newaccountant
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }
        
        function saveMember(newmember, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Member",
                data: newmember
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {
                 
      
               
            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }

        function saveMinistry(newministry, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Ministry",
                data: newministry
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }

        function saveGroup(newgroup, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Group",
                data: newgroup
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {



            },
                function (error) {
                    handleError(Error);
                }
            );
            //handleSucess,handleError);
        }


        function handleSucess(response) {

            return response.data;
        }
        function handleError(response) {
            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (
                !angular.isObject(response.data) ||
                !response.data.message
            ) {
                return ($q.reject("An unknown error occurred."));
            }
            // Otherwise, use expected error message.
            return ($q.reject(response.data.message));

        }


         function getPastorals() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Pastoral' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;

        }

        function getSongs() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Song' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;

        }

        function getExpenses() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Expense' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;

        }




        function getSermons() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Sermon' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;

        }

        function getVenues() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Venue' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;

        }

        function getGroups() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Group' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;
           
        }

        function getActivityCategories() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/ActivityCategory' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;

        }

        function getActivities() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Activity' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;

        }

        function getMinstries() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Ministry' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;
           
        }


        function getAccountants() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Accountant' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;

        }

        function getMembers() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Member' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;
          
        }
        function getPeople() {

            // Get the deferred object
            //var deferred = $q.defer();
            // Initiates the AJAX call
            //$http({ method: 'GET', url: '/HotTowel/GetPeopleDetails' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            //return deferred.promise;
            
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
            
        }
    }
})();