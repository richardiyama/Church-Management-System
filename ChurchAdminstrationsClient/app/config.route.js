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
                        content: '<i class="fa fa-users"></i> Member'
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
            },

            {

                url: '/ministry',
                config: {
                    title: 'Ministry',
                    templateUrl: 'app/ministry/ministry.html',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-support"></i> Ministry'
                    }
                }
            },

            {

                url: '/addministry',
                config: {
                    title: 'Add new ministry',
                    templateUrl: 'app/addministry/addministry.html',
                    controller: 'addministry'

                }
            },

            {

                url: '/editministry/:MinistryId',
                config: {
                    title: 'edit ministry',
                    templateUrl: 'app/editministry/editministry.html',
                    controller: 'editministry'

                }
            },

            {

                url: '/deleteministry/:MinistryId',
                config: {
                    title: 'delete ministry',
                    templateUrl: 'app/deleteministry/deleteministry.html',
                    controller: 'deleteministry'

                }
            },


            {

                url: '/group',
                config: {
                    title: 'Group',
                    templateUrl: 'app/group/group.html',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-group"></i> Group'
                    }
                }
            },


            {

                url: '/addgroup',
                config: {
                    title: 'Add new group',
                    templateUrl: 'app/addgroup/addgroup.html',
                    controller: 'addgroup'

                }
            },

            {

                url: '/editgroup/:GroupId',
                config: {
                    title: 'edit group',
                    templateUrl: 'app/editgroup/editgroup.html',
                    controller: 'editgroup'

                }
            },

            {

                url: '/deletegroup/:GroupId',
                config: {
                    title: 'delete group',
                    templateUrl: 'app/deletegroup/deletegroup.html',
                    controller: 'deletegroup'

                }
            },



            {

                url: '/accountant',
                config: {
                    title: 'Accountant',
                    templateUrl: 'app/accountant/accountant.html',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-money"></i> Accountant'
                    }
                }
            },



            {

                url: '/addaccountant',
                config: {
                    title: 'Add new accountant',
                    templateUrl: 'app/accountant/addaccountant.html',
                    controller: 'addaccountant'

                }
            },

            {

                url: '/editaccountant/:AccountantId',
                config: {
                    title: 'Edit accountant',
                    templateUrl: 'app/accountant/editaccountant.html',
                    controller: 'editaccountant'

                }
            },

            {

                url: '/deleteaccountant/:AccountantId',
                config: {
                    title: 'delete accountant',
                    templateUrl: 'app/accountant/deleteaccountant.html',
                    controller: 'deleteaccountant'

                }
            },

            {

                url: '/activity',
                config: {
                    title: 'Activity',
                    templateUrl: 'app/activity/activity.html',
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-digg"></i> Activity'
                    }
                }
            },


            {

                url: '/addactivity',
                config: {
                    title: 'Add new activity',
                    templateUrl: 'app/activity/addactivity.html',
                    controller: 'addactivity'

                }
            },


            {

                url: '/editactivity/:ActivityId',
                config: {
                    title: 'Edit activity',
                    templateUrl: 'app/activity/editactivity.html',
                    controller: 'editactivity'

                }
            },


            {

                url: '/deleteactivity/:ActivityId',
                config: {
                    title: 'delete activity',
                    templateUrl: 'app/activity/deleteactivity.html',
                    controller: 'deleteactivity'

                }
            },


            {

                url: '/venue',
                config: {
                    title: 'Venue',
                    templateUrl: 'app/venue/venue.html',
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-building"></i> Venue'
                    }
                }
            },

     
                 {

                     url: '/addvenue',
                     config: {
                         title: 'Add new venue',
                         templateUrl: 'app/venue/addvenue.html',
                         controller: 'addvenue'

                     }
                 },

                 {

                     url: '/editvenue/:VenueId',
                     config: {
                         title: 'Edit venue',
                         templateUrl: 'app/venue/editvenue.html',
                         controller: 'editvenue'

                     }
                 },

                 {

                     url: '/deletevenue/:VenueId',
                     config: {
                         title: 'Delete venue',
                         templateUrl: 'app/venue/deletevenue.html',
                         controller: 'deletevenue'

                     }
                 },

                 {

                     url: '/expense',
                     config: {
                         title: 'Expense',
                         templateUrl: 'app/expense/expense.html',
                         settings: {
                             nav: 7,
                             content: '<i class="fa fa-money"></i> Expense'
                         }
                     }
                 },


                 {

                     url: '/addexpense',
                     config: {
                         title: 'Add new expense',
                         templateUrl: 'app/expense/addexpense.html',
                         controller: 'addvenue'

                     }
                 },

                 {

                     url: '/editexpense/:ExpenseId',
                     config: {
                         title: 'Edit expense',
                         templateUrl: 'app/expense/editexpense.html',
                         controller: 'editexpense'

                     }
                 },

                 {

                     url: '/deleteexpense/:ExpenseId',
                     config: {
                         title: 'Delete expense',
                         templateUrl: 'app/expense/deleteexpense.html',
                         controller: 'deleteexpense'

                     }
                 },

                 {

                     url: '/sermon',
                     config: {
                         title: 'Sermon',
                         templateUrl: 'app/sermon/sermon.html',
                         settings: {
                             nav: 7,
                             content: '<i class="fa fa-book"></i> Sermon'
                         }
                     }
                 },


                 {

                     url: '/addsermon',
                     config: {
                         title: 'Add new sermon',
                         templateUrl: 'app/sermon/addsermon.html',
                         controller: 'addsermon'

                     }
                 },

                 {

                     url: '/editsermon/:SermonId',
                     config: {
                         title: 'Edit sermon',
                         templateUrl: 'app/sermon/editsermon.html',
                         controller: 'editsermon'

                     }
                 },

                 {

                     url: '/deletesermon/:SermonId',
                     config: {
                         title: 'Delete sermon',
                         templateUrl: 'app/sermon/deletesermon.html',
                         controller: 'deletesermon'

                     }
                 },


                 {

                     url: '/song',
                     config: {
                         title: 'Song',
                         templateUrl: 'app/song/song.html',
                         settings: {
                             nav: 7,
                             content: '<i class="fa fa-music"></i> Song'
                         }
                     }
                 },


                 {

                     url: '/addsong',
                     config: {
                         title: 'Add new song',
                         templateUrl: 'app/song/addsong.html',
                         controller: 'addsong'

                     }
                 },

                 {

                     url: '/editsong/:SongId',
                     config: {
                         title: 'Edit song',
                         templateUrl: 'app/song/editsong.html',
                         controller: 'editsong'

                     }
                 },

                 {

                     url: '/deletesong/:SongId',
                     config: {
                         title: 'Delete song',
                         templateUrl: 'app/song/deletesong.html',
                         controller: 'deletesong'

                     }
                 },


                 {

                     url: '/activitycategory',
                     config: {
                         title: 'Activity category',
                         templateUrl: 'app/activitycategory/activitycategory.html',
                         controller: 'activitycategory'

                     }
                 },

                 {

                     url: '/addactivitycategory',
                     config: {
                         title: 'Add new activity category',
                         templateUrl: 'app/activitycategory/addactivitycategory.html',
                         controller: 'addactivitycategory'

                     }
                 }

                

        ];
    }
})();