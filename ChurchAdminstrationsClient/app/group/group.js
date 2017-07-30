(function () {
    'use strict';
    var controllerId = 'group';
    angular.module('app').controller(controllerId, ['common', group]);

    function group(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Groups';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Group View'); });
        }
    }
})();