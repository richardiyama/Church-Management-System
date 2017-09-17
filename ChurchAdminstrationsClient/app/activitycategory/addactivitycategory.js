(function () {
    'use strict';
    
    var addActivityCategory = 'addactivitycategory';

    
    angular.module('app').controller(addActivityCategory, ['common', 'datacontext', '$scope', addactivitycategory]);

    function addactivitycategory(common, datacontext,$scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addActivityCategory);

        var vm = this;
        vm.title = 'Add Activity Category';
     
       
        //vm.members = [];
        activate();

       

        

        $scope.save = function () {
            var currentactivitycategory = $scope.newactivitycategory;
            datacontext.saveActivityCategory(currentactivitycategory);
            $scope.message = 'New Activity Category saved';

        }

        function activate() {
         
            common.activateController([], addActivityCategory)
                .then(function () { log('Activated Add Activity Category View'); });
        }


        


       
    }


   





    
                




})();
