(function () {
    'use strict';

    var editMember = 'editmember';


    angular.module('app').controller(editMember, ['common', 'datacontext', '$scope','$http', '$routeParams',editmember]);

    function editmember(common, datacontext,$scope,$http,$routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(editMember);

        var vm = this;
        vm.title = 'Edit Member';
        //vm.members = [];

        

        activate();
        
       
       
        function activate() {
            var promises = [Edit()];
            common.activateController(promises, editMember)
                .then(function () { log('Activated Edit Member View'); });
        }



       
        function Edit() {
           
            $http.get('http://localhost:58376/api/Member/' + $routeParams.MemberId).then(function (response) {

                $scope.newmember = response.data;
            })

            $scope.updateEmp = function () {
                var data = {
                    MemberID: $routeParams.MemberId,
                    Name: $scope.newmember.name,
                    Username: $scope.newmember.username,
                    Email: $scope.newmember.email,
                    DateOfBirth: $scope.newmember.dateOfBirth,
                    Password: $scope.newmember.password,
                    ConfirmPassword: $scope.newmember.confirmPassword,
                    Gender: $scope.newmember.gender,
                    MobileNo: $scope.newmember.mobileNo,
                    City: $scope.newmember.city,
                    Occupation: $scope.newmember.occupation,
                    Education: $scope.newmember.education,

                    GroupName: $scope.newmember.groupName,
                    MinistryName: $scope.newmember.ministryName,

                    MemberType: $scope.newmember.memberType,
                    BaptistDate: $scope.newmember.baptistDate,
                    Address: $scope.newmember.address,
                    Image: $scope.newmember.image,
                    MaritalStatus: $scope.newmember.maritalStatus

                }

                $http.put('http://localhost:58376/api/Member/' + $routeParams.MemberId, data).then(function (data, status) {

                    console.log(status);
                })

            }

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
