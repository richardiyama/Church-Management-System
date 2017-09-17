(function () {
    'use strict';
    var getSermon = 'sermon';
    

    angular.module('app').controller(getSermon, ['common','datacontext', sermon]);
    
       
    function sermon(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getSermon);

        var vm = this;
        vm.sermons = [];
        vm.title = 'Sermon';

        activate();

        function activate() {
            var promises = [getSermons()];
            common.activateController(promises, getSermon)
                .then(function () { log('Activated Sermon View'); });
        }

        function getSermons() {
            return datacontext.getSermons().then(function (data) {
                vm.sermons = data.$values;
                console.log(vm.sermons);
                return vm.sermons;

            });
        }
       
    }


   
    
})();
