(function () {
    'use strict';
    var controllerId = "ministry";
    
    angular.module('app').controller(controllerId, ['common', ministry]);

    function ministry(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Ministry';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Ministry View'); });
        }
    }
})();