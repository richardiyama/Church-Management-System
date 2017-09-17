(function () {
    'use strict';

    var deleteSong = 'deletesong';


    angular.module('app').controller(deleteSong, ['common', 'datacontext', '$scope', '$http', '$routeParams', deletesong]);

    function deletesong(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(deleteSong);

        var vm = this;
        vm.title = 'Delete Song';




        activate();



        function activate() {
            var promises = [Delete()];
            common.activateController(promises, deleteSong)
                .then(function () { log('Activated Delete Song View'); });
        }



        function Delete() {

            $http.get('http://localhost:58376/api/Song/' + $routeParams.SongId).then(function (response) {

                $scope.newsong = response.data;


            });


            $scope.removeSong = function (data) {


                $http.delete('http://localhost:58376/api/Song/' + $routeParams.SongId, data).then(function (data) {



                    $scope.newsong.songName = "";

                    $scope.newsong.songCategory = "";
                    $scope.newsong.songFile = "";

                    $scope.newsong.description = "";

                   



                    alert("Song deleted");
                });

            };

        }


    }



})();
