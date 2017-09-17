(function () {
    'use strict';
    
    var addPastoral = 'addpastoral';

    
    angular.module('app').controller(addPastoral, ['common', 'datacontext', '$scope', addpastoral]);

    function addpastoral(common, datacontext,$scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addPastoral);

        var vm = this;
        vm.title = 'Add Pastoral';
       
        vm.members = [];

        activate();

       

        

        $scope.save = function () {
            var currentpastoral = $scope.newpastoral;
            datacontext.savePastoral(currentpastoral);
            $scope.message = 'New Pastoral saved';

        }

        function activate() {
            var promises = [getMembers()];
            common.activateController(promises, addPastoral)
                .then(function () { log('Activated Add Pastoral View'); });
        }

        function getMembers() {
            return datacontext.getMembers().then(function (data) {
                vm.members = data.$values;
                console.log(vm.members);
                return vm.members;

            });
        }


       
    }


   





    
                




})();
