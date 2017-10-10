(function () {
    'use strict';
    var getDonation = 'donation';


    angular.module('app').controller(getDonation, ['common', 'datacontext', donation]);



    function donation(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(getDonation);

        var vm = this;
        vm.donations = [];
        vm.title = 'Donation';

        activate();

        function activate() {
            var promises = [getDonations()];
            common.activateController(promises, getDonations)
                .then(function () { log('Activated Donation View'); });
        }

        function getDonations() {
            return datacontext.getDonations().then(function (data) {
                vm.donations = data.$values;
                console.log(vm.donations);
                return vm.donations;

            });
        }

    }




})();
