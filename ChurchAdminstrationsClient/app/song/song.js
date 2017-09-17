(function () {
    'use strict';
    var getSong = 'song';
    

    angular.module('app').controller(getSong, ['common','datacontext', song]);
    
       

    function song(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getSong);

        var vm = this;
        vm.songs = [];
        vm.title = 'Song';

        activate();

        function activate() {
            var promises = [getSongs()];
            common.activateController(promises, getSong)
                .then(function () { log('Activated Song View'); });
        }

        function getSongs() {
            return datacontext.getSongs().then(function (data) {
                vm.songs = data.$values;
                console.log(vm.songs);
                return vm.songs;

            });
        }
       
    }


   
    
})();
