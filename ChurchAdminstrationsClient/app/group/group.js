(function () {
    'use strict';
    var controllerId = "group";


    angular.module('app').controller(controllerId, ['common', 'datacontext', group]);

    function group(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Group';
        vm.groups = [];

        activate();

        function activate() {
            var promises = [getGroups()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Group View'); });
        }

        function getGroups() {
            return datacontext.getGroups().then(function (data) {
                vm.groups = data.$values;
                console.log(vm.groups);
                return vm.groups;

            });
        }
    }
})();