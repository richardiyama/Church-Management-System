(function () {
    'use strict';

    var editSong = 'editsong';


    angular.module('app').controller(editSong, ['common', 'datacontext', '$scope','$http', '$routeParams',editsong]);

    function editsong(common, datacontext,$scope,$http,$routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editSong);

        var vm = this;
        vm.title = 'Edit Song';
        

        

        activate();
        
       
       
        function activate() {
            var promises = [Edit()];
            common.activateController(promises, editSong)
                .then(function () { log('Activated Edit Song View'); });
        }




        function Edit() {
           
            $http.get('http://localhost:58376/api/Song/' + $routeParams.SongId).then(function (response) {

                $scope.newsong = response.data;
            })

            $scope.updateSong = function () {
                var data = {
                    SongID: $routeParams.SongId,
                    SongName: $scope.newsong.songName,
                    
                    SongCategory: $scope.newsong.songCategory,
                    Description: $scope.newsong.description,

                    SongFile: $scope.newsong.songFile
               

                }

                $http.put('http://localhost:58376/api/Song/' + $routeParams.SongId, data).then(function (data, status) {

                    console.log(status);
                })

            }

        }


    }




})();
