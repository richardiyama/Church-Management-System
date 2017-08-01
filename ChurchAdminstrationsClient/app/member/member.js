(function () {
    'use strict';
    var getMember = 'member';
    var addMember = 'addmember';

    angular.module('app').controller(getMember,['common', member]);
    angular.module('app').controller(addMember, ['common',addmember]);

    function member(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getMember);

        var vm = this;
        vm.title = 'Member';

        activate();

        function activate() {
            common.activateController([], getMember)
                .then(function () { log('Activated Member View'); });
        }

       
    }

    function addmember(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addMember);

        var vm = this;
        vm.title = 'Add Member';

        activate();

        function activate() {
            common.activateController([], addMember)
                .then(function () { log('Activated Add Member View'); });
        }
    }
})();