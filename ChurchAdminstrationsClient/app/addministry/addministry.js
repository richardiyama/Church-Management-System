(function () {
    'use strict';

    var addMinistry = 'addministry';


    angular.module('app').controller(addMinistry, ['common', 'datacontext', '$scope', addministry]);

    function addministry(common, datacontext, $scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addMinistry);

        var vm = this;
        vm.title = 'Add Ministry';

        //vm.members = [];
        activate();





        $scope.save = function () {
            var currentministry = $scope.newministry;
            datacontext.saveMinistry(currentministry);
            $scope.message = 'New Ministry saved';

        }

        function activate() {

            common.activateController([], addMinistry)
                .then(function () { log('Activated Add Ministry View'); });
        }





    }














})();
