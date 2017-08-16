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
            getMessageCount: getMessageCount,
            getMinstries: getMinstries,
            getGroups: getGroups,
            getMembers: getMembers,
            saveMember: saveMember,
            saveGroup: saveGroup,
            saveMinistry: saveMinistry
         
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        
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


        function getGroups() {

            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: 'http://localhost:58376/api/Group' }).success(deferred.resolve).error(deferred.reject);
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