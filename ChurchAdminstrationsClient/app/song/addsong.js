(function () {
    'use strict';
    
    var addSong = 'addsong';

    
    angular.module('app').controller(addSong, ['common', 'datacontext', '$scope', addsong]);

    function addsong(common, datacontext,$scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addSong);

        var vm = this;
        vm.title = 'Add Song';
       
        //vm.members = [];
        activate();

       

        

        $scope.save = function () {
            var currentsong = $scope.newsong;
            datacontext.saveSong(currentsong);
            $scope.message = 'New Song saved';

        }

        function activate() {
           
            common.activateController([], addSong)
                .then(function () { log('Activated Add Song View'); });
        }




       
    }


   





    
                




})();
