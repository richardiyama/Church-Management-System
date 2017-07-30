(function () {
    'use strict';
    var controllerId = 'member';
    angular.module('app').controller(controllerId, ['common', member]);

    function member(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Member';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Member View'); });
        }
    }
})();