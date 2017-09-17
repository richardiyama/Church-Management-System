(function () {
    'use strict';
    var getPastoral = 'pastoral';
    

    angular.module('app').controller(getPastoral, ['common','datacontext', pastoral]);
    
         
    
    function pastoral(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getPastoral);

        var vm = this;
        vm.pastorals = [];
        vm.title = 'Pastoral';

        activate();

        function activate() {
            var promises = [getPastorals()];
            common.activateController(promises, getPastoral)
                .then(function () { log('Activated Pastoral View'); });
        }

        function getPastorals() {
            return datacontext.getPastorals().then(function (data) {
                vm.pastorals = data.$values;
                console.log(vm.pastorals);
                return vm.pastorals;

            });
        }
       
    }


   
    
})();
