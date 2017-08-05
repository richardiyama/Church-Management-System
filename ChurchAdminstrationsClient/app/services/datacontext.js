(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common','$http', '$location', datacontext]);

    function datacontext(common, $http, $location) {
        var $q = common.$q;

        

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getMembers: getMembers,
            getGroups: getGroups,
            getMinstries: getMinstries
        };

        return service;



       function getMembers() {
           return $http.get('http://localhost:58376/api/Member')
                .then(getMembersComplete)
                .catch(function (message) {
                   (message);
                    $location.url('/');
               });

           function getMembersComplete(data, status, headers, config) {
               return data.data;
            }
        }

       function getGroups() {
           return $http.get('http://localhost:58376/api/Group')
               .then(getGroupsComplete)
               .catch(function (message) {
                   (message);
                   $location.url('/');
               });

           function getGroupsComplete(data, status, headers, config) {
               return data.data;
           }
       }

       function getMinstries() {
           return $http.get('http://localhost:58376/api/Ministry')
               .then(getMinistriesComplete)
               .catch(function (message) {
                   (message);
                   $location.url('/');
               });

           function getMinistriesComplete(data, status, headers, config) {
               return data.data;
           }
       }

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
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