(function () {
    'use strict';
    
    var addSermon = 'addsermon';

    
    angular.module('app').controller(addSermon, ['common', 'datacontext', '$scope', addsermon]);

    function addsermon(common, datacontext,$scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addSermon);

        var vm = this;
        vm.title = 'Add Sermon';
       
        //vm.members = [];
        activate();

       

        

        $scope.save = function () {
            var currentsermon = $scope.newsermon;
            datacontext.saveSermon(currentsermon);
            $scope.message = 'New Sermon saved';

        }

        function activate() {
           
            common.activateController([], addSermon)
                .then(function () { log('Activated Add Sermon View'); });
        }




       
    }


   





    
                




})();
