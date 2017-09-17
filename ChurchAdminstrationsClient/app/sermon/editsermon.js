(function () {
    'use strict';

    var editSermon = 'editsermon';


    angular.module('app').controller(editSermon, ['common', 'datacontext', '$scope','$http', '$routeParams',editsermon]);

    function editsermon(common, datacontext,$scope,$http,$routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editSermon);

        var vm = this;
        vm.title = 'Edit Sermon';
        

        

        activate();
        
       
       
        function activate() {
            var promises = [Edit()];
            common.activateController(promises, editSermon)
                .then(function () { log('Activated Edit Sermon View'); });
        }




        function Edit() {
           
            $http.get('http://localhost:58376/api/Sermon/' + $routeParams.SermonId).then(function (response) {

                $scope.newsermon = response.data;
            })

            $scope.updateSermon = function () {
                var data = {
                    SermonID: $routeParams.SermonId,
                    Description: $scope.newsermon.description,
                    FileSource: $scope.newsermon.fileSource,
                    Status: $scope.newsermon.status,
                    SermonType: $scope.newsermon.sermonType,
                    
                    SermonTitle: $scope.newsermon.sermonTitle,
                    Status: $scope.newsermon.status
               

                }

                $http.put('http://localhost:58376/api/Sermon/' + $routeParams.SermonId, data).then(function (data, status) {

                    console.log(status);
                })

            }

        }


    }




})();
