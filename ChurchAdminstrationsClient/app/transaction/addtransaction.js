(function () {
    'use strict';
    
    var addGroup = 'addgroup';

    
    angular.module('app').controller(addGroup, ['common', 'datacontext', '$scope', addgroup]);

    function addgroup(common, datacontext,$scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addGroup);

        var vm = this;
        vm.title = 'Add Group';
       
        //vm.members = [];
        activate();

       

        

        $scope.save = function () {
            var currentgroup = $scope.newgroup;
            datacontext.saveGroup(currentgroup);
            $scope.message = 'New Group saved';

        }

        function activate() {
           
            common.activateController([], addGroup)
                .then(function () { log('Activated Add Group View'); });
        }




       
    }


   





    
                




})();
