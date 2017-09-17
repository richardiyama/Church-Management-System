(function () {
    'use strict';
    
    var addVenue = 'addvenue';

    
    angular.module('app').controller(addVenue, ['common', 'datacontext', '$scope', addvenue]);

    function addvenue(common, datacontext,$scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addVenue);

        var vm = this;
        vm.title = 'Add Venue';
       
        //vm.members = [];
        activate();

       

        

        $scope.save = function () {
            var currentvenue = $scope.newvenue;
            datacontext.saveVenue(currentvenue);
            $scope.message = 'New Venue saved';

        }

        function activate() {
           
            common.activateController([], addVenue)
                .then(function () { log('Activated Add Venue View'); });
        }




       
    }


   





    
                




})();
