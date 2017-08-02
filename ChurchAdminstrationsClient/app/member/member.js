(function () {
    'use strict';
    var getMember = 'member';
    var addMember = 'addmember';

    angular.module('app').controller(getMember, ['common','datacontext', member]);
    angular.module('app').controller(addMember, ['common',addmember]);
     

    function member(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getMember);

        var vm = this;
        vm.members = [];
        vm.title = 'Member';

        activate();

        function activate() {
            var promises = [getMembers()];
            common.activateController(promises, getMember)
                .then(function () { log('Activated Member View'); });
        }

        function getMembers() {
            return datacontext.getMembers().then(function (data) {
                vm.members = data;
                console.log(vm.members);
                return vm.members;

            });
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
