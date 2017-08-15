(function () {
    'use strict';

    var deleteMember = 'deletemember';


    angular.module('app').controller(deleteMember, ['common', 'datacontext', '$scope', '$http', '$routeParams', deletemember]);

    function deletemember(common, datacontext, $scope, $http, $routeParams) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(deleteMember);

        var vm = this;
        vm.title = 'Delete Member';
       



        activate();



        function activate() {
            var promises = [Delete()];
            common.activateController(promises, deleteMember)
                .then(function () { log('Activated Delete Member View'); });
        }



        function Delete() {

            $http.get('http://localhost:58376/api/Member/' + $routeParams.MemberId).then(function (response) {

                $scope.newmember = response.data;
            })

            $scope.removeMember = function (data) {
                

                $http.delete('http://localhost:58376/api/Member/' + $routeParams.MemberId, data).then(function (data) {

                    $scope.newmember.name = "";

                    $scope.newmember.username = "";
                    
                    $scope.newmember.email = "";
                    

                    $scope.newmember.dateofbirth = "";

                    
                    $scope.newmember.password = "";
                    
                    
                    $scope.newmember.confirmPassword = "";
                    

                    $scope.newmember.gender = "";

                    
                    $scope.newmember.mobileNo = "";
                    
                   
                    $scope.newmember.city = "";
                    


                    $scope.newmember.occupation = "";

                    
                    $scope.newmember.education = "";
                    
                    
                    $scope.newmember.groupName = "";
                    

                    $scope.newmember.ministryName = "";

                    
                    $scope.newmember.baptistDate = "";
                    
                   
                    $scope.newmember.address = "";
                    

                    $scope.newmember.maritalStatus = "";

                    
                    $scope.newmember.image = "";
                    


                    alert("Member deleted");
                })

            }

        }


    }



})();
