(function () {
    'use strict';
    var getMember = 'member';
    var addMember = 'addmember';

    angular.module('app').controller(getMember, ['common','datacontext', member]);
    angular.module('app').controller(addMember, ['common', 'datacontext',addmember]);
     

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


    function addmember(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(addMember);

        var vm = this;
        vm.title = 'Add Member';
        vm.groups = [];
        vm.ministries = [];
        activate();

        function activate() {
            var promises = [getGroups(), getMinstries()];
            common.activateController(promises,  addMember)
                .then(function () { log('Activated Add Member View'); });
        }

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

        vm.addMembers = function () {

            //Assign Values
            if (vm.name) { var name = vm.name; } else { var name = null; }
            if (vm.username) { var username = $scope.username; } else { var username = null; }
            if (vm.email) { var email = vm.email; } else { var email = null; }
            if (vm.dateofbirth) { var dateofbirth = vm.dateofbirth; } else { var dateofbirth = null; }
            if (vm.password) { var password = vm.password; } else { var password = null; }
            if (vm.confirmpassword) { var confirmpassword = vm.confirmpassword; } else { var confirmpassword = null; }
            if (vm.gender) { var gender = vm.gender; } else { var gender = null; }
            if (vm.mobileno) { var mobileno = vm.mobileno; } else { var mobileno = null; }
            if (vm.city) { var city = vm.city; } else { var city = null; }
            if (vm.occupation) { var occupation = vm.occupation; } else { var occupation = null; }
            if (vm.education) { var education = vm.zipcode; } else { var education = null; }

            if (vm.membertype) { var membertype = vm.city; } else { var membertype = null; }
            if (vm.baptistdate) { var baptistdate = vm.baptistdate; } else { var baptistdate = null; }
            if (vm.address) { var address = vm.address; } else { var address = null; }
            if (vm.image) { var image = vm.image; } else { var image = null; }
            if (vm.maritalstatus) { var maritalstatus = vm.state; } else { var state = null; }

            var data = {
                Name: name,
                Username: username,
                Password: password,
                ConfirmPassword: confirmpassword,
                Email: email,
                Gender: gender,
                MobileNo: mobileno,
                DateOfBirth: dateofbirth,
                MaritalStatus: maritalstatus,
                MemberType: membertype,
                Occupation: occupation,
                Education: education,
                BaptistDate: baptistdate,
                City: city,
                Address: address,
                Image: image,
            }

            $http.post('http://localhost:49431/api/Employee', data).then(function (response) {

                console.log(response.data);
            })

        }

    }
    
})();
