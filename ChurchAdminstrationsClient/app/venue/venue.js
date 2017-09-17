(function () {
    'use strict';
    var getVenue = 'venue';
    

    angular.module('app').controller(getVenue, ['common','datacontext', venue]);
    
       


       
    
      

            
         
   
     

    function venue(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getVenue);

        var vm = this;
        vm.venues = [];
        vm.title = 'Venue';

        activate();

        function activate() {
            var promises = [getVenues()];
            common.activateController(promises, getVenue)
                .then(function () { log('Activated Member View'); });
        }

        function getVenues() {
            return datacontext.getVenues().then(function (data) {
                vm.venues = data.$values;
                console.log(vm.venues);
                return vm.venues;

            });
        }
       
    }


   
    
})();
