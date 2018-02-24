var examenApp = angular.module('examenApp', ['ui.router']);

examenApp.constant('Config', {"backendURL":"http://localhost:8091/tp.api"});

examenApp.config(function($stateProvider){
    $stateProvider.state('tipoExpedDtos-list',{
        url:'/tipoExpedDtos',
        templateUrl:'../partials/lista-tipoExpedDtos.html',
        controller:'TipoExpedDtosListCtrl'
    });
    $stateProvider.state('tipoExpedDtos-view',{
       url:'/tipoExpedDtos/:id/ver',
       templateUrl:'../partials/ver-tipoExpedDtos.html',
       controller:'TipoExpedDtosViewCtrl'
    }).state('tipoExpedDtos-new',{
        url:'/tipoExpedDtos/nuevo',
        templateUrl:'../partials/nuevo-tipoExpedDtos.html',
        controller:'TipoExpedDtosNuevoCtrl'
    }).state('tipoExpedDtos-edit',{
        url:'/tipoExpedDtos/:id/editar',
        templateUrl:'../partials/editar-tipoExpedDtos.html',
        controller:'TipoExpedDtosEditCtrl'
    });
}).run(function($state){
   $state.go('tipoExpedDtos-list');
});