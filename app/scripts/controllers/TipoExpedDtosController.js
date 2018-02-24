'use strict'
examenApp
.controller('TipoExpedDtosListCtrl', ['$scope', '$http', 'TipoExpedDtosService', '$state', '$window', 
function($scope, $http, TipoExpedDtosService, $state, $window){
    $scope.tipoExpedDtos = {};

    $scope.obtenerTiposExpedDtos = function(){
        // console.log(TipoExpedDtosService);
        TipoExpedDtosService.obtenerTiposExpedDtos()
        .success(function (x){
            $scope.listaTiposExpedDtos = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerTiposExpedDtos();


}])

.controller('TipoExpedDtosViewCtrl', function($scope, $stateParams, TipoExpedDtosService){
    $scope.getById = function() {
        TipoExpedDtosService.getById($stateParams.id)
        .success(function(x){
            $scope.tipoExpedDtos = x;
            console.log(x);  
        })
        .error(function(data){
            console.log(data);
        });
        
    };
    $scope.getById($stateParams.id);
    // TipoExpedDtosService.getById({id: $stateParams.id});
})

.controller('TipoExpedDtosNuevoCtrl', function($scope, $state, $stateParams, TipoExpedDtosService){

    $scope.tipoExpedDtos = {};

    $scope.obtenerTiposExpedDtos = function(){
        // console.log(TipoExpedDtosService);
        TipoExpedDtosService.obtenerTiposExpedDtos()
        .success(function (x){
            $scope.listaTiposExpedDtos = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerDepartamentos = function(){
        TipoExpedDtosService.obtenerDepartamentos()
        .success(function (x){
            $scope.listaDepartamentos = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerDepartamentos();

    $scope.obtenerTipoExped = function(){
        TipoExpedDtosService.obtenerTipoExpeds()
        .success(function (x){
            $scope.listaTipoExpeds = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerTipoExped();

    $scope.crearTiposExpedDtos = function (){
        console.log('Comienza la entrada: ***********************');
        console.log($scope.tipoExpedDtos);
        console.log('Termina la entrada: ***********************');
        if(!$.isEmptyObject($scope.tipoExpedDtos)){
            TipoExpedDtosService.crearTiposExpedDtos($scope.tipoExpedDtos)
            .success(function(x){
                $scope.tipoExpedDtos = {};
                $scope.obtenerTiposExpedDtos();
                console.log(x);
                $state.go('tipoExpedDtos-list');
            })
            .error(function(data){
                console.log(data);
            });
        }
    };
})

.controller('TipoExpedDtosEditCtrl', function($scope, $state, $stateParams, TipoExpedDtosService){
    
    $scope.obtenerDepartamentos = function(){
        TipoExpedDtosService.obtenerDepartamentos()
        .success(function (x){
            $scope.listaDepartamentos = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerDepartamentos();

    $scope.obtenerTipoExped = function(){
        TipoExpedDtosService.obtenerTipoExpeds()
        .success(function (x){
            $scope.listaTipoExpeds = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerTipoExped();
    
    
    $scope.getById = function() {
        TipoExpedDtosService.getById($stateParams.id)
        .success(function(x){
            $scope.tipoExpedDtos = x;
            console.log(x);  
        })
        .error(function(data){
            console.log(data);
        });
        
    };

    $scope.getById($stateParams.id);

    $scope.obtenerTiposExpedDtos = function(){
        // console.log(TipoExpedDtosService);
        TipoExpedDtosService.obtenerTiposExpedDtos()
        .success(function (x){
            $scope.listaTiposExpedDtos = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.modificarTipoExpedDtos = function() {
        console.log($scope.tipoExpedDtos);
         if(!$.isEmptyObject($scope.tipoExpedDtos)){
            TipoExpedDtosService.modificarTiposExpedDtos($scope.tipoExpedDtos, $stateParams.id)
            .success(function(x){
                $scope.tipoExpedDtos = {};
                $scope.obtenerTiposExpedDtos();
                console.log(x);
                $state.go('tipoExpedDtos-list');
            })
            .error(function(data){
                console.log(data);
            });
        }
    };
});