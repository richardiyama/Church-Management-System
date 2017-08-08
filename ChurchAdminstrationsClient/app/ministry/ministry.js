(function () {
    'use strict';
    var controllerId = "ministry";

    
    angular.module('app').controller(controllerId, ['common','datacontext', ministry]);

    function ministry(common,datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Ministry';
        vm.ministries = [];

        activate();

        function activate() {
            var promises = [getMinstries()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Ministry View'); });
        }

        function getMinstries() {
            return datacontext.getMinstries().then(function (data) {
                vm.ministries = data.$values;
                console.log(vm.ministries);
                return vm.ministries;

            });
        }
    }
})();