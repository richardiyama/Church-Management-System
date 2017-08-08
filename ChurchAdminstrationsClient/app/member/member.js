(function () {
    'use strict';
    var getMember = 'member';
    

    angular.module('app').controller(getMember, ['common','datacontext', member]);
    
       


       
    
      

            /*  //Assign Values
              if ($scope.name) { var name = $scope.name; } else { var name = null; }
              if ($scope.username) { var username = $scope.username; } else { var username = null; }
              if ($scope.email) { var email = $scope.email; } else { var email = null; }
              if ($scope.dateofbirth) { var dateofbirth = $scope.dateofbirth; } else { var dateofbirth = null; }
              if ($scope.password) { var password = $scope.password; } else { var password = null; }
              if ($scope.confirmpassword == $scope.password) { var confirmpassword = $scope.confirmpassword; } else { var confirmpassword = null; }
              if ($scope.gender) { var gender = $scope.gender; } else { var gender = null; }
              if ($scope.mobileno) { var mobileno = $scope.mobileno; } else { var mobileno = null; }
              if ($scope.city) { var city = $scope.city; } else { var city = null; }
              if ($scope.occupation) { var occupation = $scope.occupation; } else { var occupation = null; }
              if ($scope.education) { var education = $scope.education; } else { var education = null; }
  
              if ($scope.group) { var group = $scope.group; } else { var group = null; }
              if ($scope.ministry) { var ministry = $scope.ministry; } else { var ministry = null; }
  
              if ($scope.membertype) { var membertype = $scope.membertype; } else { var membertype = null; }
              if ($scope.baptistdate) { var baptistdate = $scope.baptistdate; } else { var baptistdate = null; }
              if ($scope.address) { var address = $scope.address; } else { var address = null; }
              if ($scope.file) { var file = $scope.file; } else { var file = null; }
              if ($scope.maritalstatus) { var maritalstatus = $scope.maritalstatus; } else { var maritalstatus = null; }*/

         
   
     

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
