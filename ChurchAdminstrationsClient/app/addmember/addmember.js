(function () {
    'use strict';
    
    var addMember = 'addmember';

    
    angular.module('app').controller(addMember, ['common', 'datacontext', '$scope', addmember]);

    function addmember(common, datacontext,$scope) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addMember);

        var vm = this;
        vm.title = 'Add Member';
        vm.groups = [];
        vm.ministries = [];
        //vm.members = [];
        activate();

       

        

        $scope.save = function () {
            var currentmember = $scope.newmember;
            datacontext.saveMember(currentmember);
            $scope.message = 'New Member saved';

        }

        function activate() {
            var promises = [getGroups(), getMinstries()];
            common.activateController(promises, addMember)
                .then(function () { log('Activated Add Member View'); });
        }




        /*function save() {

            datacontext.save(vm.newmember);
            console.log(vm.newmember);
        }*/

        function getGroups() {
            return datacontext.getGroups().then(function (data) {
                vm.groups = data.$values;
                console.log(vm.groups);
                return vm.groups;

            });
        }

        function getMinstries() {
            return datacontext.getMinstries().then(function (data) {
                vm.ministries = data.$values;
                console.log(vm.ministries);
                return vm.ministries;

            });
        }
    }


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





    
                




})();
