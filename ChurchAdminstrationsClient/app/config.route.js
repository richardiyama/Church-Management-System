(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/member',
                config: {
                    title: 'Member',
                    templateUrl: 'app/member/member.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Member'
                    }
                }
            },
            {

                url: '/ministry',
                config: {
                    title: 'Ministry',
                    templateUrl: 'app/ministry/ministry.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Ministry'
                    }
                }
            },

            {

                url: '/group',
                config: {
                    title: 'Group',
                    templateUrl: 'app/group/group.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Group'
                    }
                }
            },

            {

                url: '/addmember',
                config: {
                    title: 'Add new member',
                    templateUrl: 'app/addmember/addmember.html',
                    controller: 'addmember'

                }
            },

             {

                 url: '/editmember/:MemberId',
                config: {
                    title: 'edit member',
                    templateUrl: 'app/editmember/editmember.html',
                    controller: 'editmember'

                }
            },

             {

                 url: '/deletemember/:MemberId',
                 config: {
                     title: 'delete member',
                     templateUrl: 'app/deletemember/deletemember.html',
                     controller: 'deletemember'

                 }
             }
        ];
    }
})();