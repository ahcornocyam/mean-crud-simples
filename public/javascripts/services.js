var srv =  angular.module('myApp.services', ['ngResource']);

srv.factory('UsersSrv',['$resource', function ( $resource ) {
    return $resource('/api/users/:id',
    //defaultParams 
    {
        id: '@id'
    }, 
    //actions
    {
        update: {
            method:"PUT",
            url:"/api/users/:id"
        }  
    });
  }]);