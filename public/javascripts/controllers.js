var ctrl = angular.module('myApp.controllers',['myApp.services']);

ctrl.controller('UsersCtrl',['$scope', 'UsersSrv', '$routeParams','$location', function ($scope, UsersSrv, $routeParams, $location){
    
    var limpaUsuario =  function () {
        delete $scope.usuario;
      }
    $scope.load = function () {
        $scope.registros = UsersSrv.query();
    }
    
    $scope.get = function () {
        $scope.usuario = UsersSrv.get({id: $routeParams.id })
      }
      
    $scope.edit = function (usuario) {
        delete usuario._id;
        $scope.result = UsersSrv.update(
            {id: $routeParams.id},
            usuario,
            function (data, status, headers, config) {  
                $location.path('/');                
            }            
        );
        limpaUsuario();
      }
    $scope.add = function (usuario) {
        $scope.result = UsersSrv.save(
            {},
            usuario,
            function (data, status, headers, config) {  
                $location.path('/');                
            }            
        );
          limpaUsuario();
      }
      $scope.delete = function (id) {        
        if(confirm ("Deseja excluir esse usuário???")) {
            $scope.result = UsersSrv.remove(
            {id: id},
            {},
            function (data, status, headers, config) {  
                $location.path('/');                
            }            
        );
        }
      }
      
}])