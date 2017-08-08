(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common','$http', datacontext]);

    function datacontext(common,$http) {
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
            modifyMember: modifyMember,
            deletePeople: deletePeople
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function modifyMember(newmember, $scope) {
            // var $scope = $scope;
            var request = $http({
                method: "post",
                url: "/HotTowel/ModifyPeople",
                data: newmember
            });

            return request.then(handleSucess, handleError);
        }

        function deletePeople(user, $scope, idx) {
            // var $scope = $scope;
            var request = $http({
                method: "post",
                url: "/HotTowel/DeletePeople",
                data: user
            });

            return request.then(function (response) {
                $scope.vm.people.splice(idx, 1);
                $scope.Modifymessage = "Data deleted successfully"
            },
                function (error) {
                    handleError(error);
                }
            );
        }


        function saveMember(newmember, $scope) {
            var request = $http({
                method: "POST",
                url: "http://localhost:58376/api/Member",
                data: newmember
            });

            //  var nsg = request.then(handleSucess, handleError);

            return request.then(function (response) {
               
                $scope.vm.members.push(response.data);
                $scope.message = "Data saved successfully"
                $scope.newmember.name = "";
                $scope.newmember.username = "";
                $scope.newmember.email = "";
                $scope.newmember.dateofbirth = "";
                $scope.newmember.password = "";
                $scope.newmember.confirmpassword = "";
                $scope.newmember.gender = "";
                $scope.newmember.mobileno = "";
                $scope.newmember.city = "";
                $scope.newmember.occupation = "";
                $scope.newmember.education = "";

                $scope.newmember.group = "";
                $scope.newmember.ministry = "";

                $scope.newmember.membertype = "";
                $scope.newmember.baptistdate = "";
                $scope.newmember.address = "";
                $scope.newmember.file = "";
                $scope.newmember.maritalstatus = "";
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