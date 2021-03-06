﻿(function () {
    'use strict';
    var getMember = 'member';
    

    angular.module('app').controller(getMember, ['common','datacontext', member]);
    
       


       
    
      

            
         
   
     

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
                vm.members = data.$values;
                console.log(vm.members);
                return vm.members;

            });
        }
       
    }


   
    
})();
