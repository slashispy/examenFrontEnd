'use strict'
examenApp
.factory('TipoExpedDtosService',['$http','Config', function($http, Config){
    return{
        
        obtenerTiposExpedDtos : function(){
            return $http.get(Config.backendURL + '/tipoExpedDtos/');
        },
        crearTiposExpedDtos : function(tipoExpedDtos){
            return $http.post(Config.backendURL + '/tipoExpedDtos/', tipoExpedDtos);
        },
        modificarTiposExpedDtos : function(tipoExpedDtos, id){
            return $http.put(Config.backendURL + '/tipoExpedDtos/' + id, tipoExpedDtos);
        },
        getById : function(id){
            return $http.get(Config.backendURL + '/tipoExpedDtos/' + id);
        },
        obtenerDepartamentos : function(){
            return $http.get(Config.backendURL + '/departamento/');
        },
        obtenerTipoExpeds : function(){
            return $http.get(Config.backendURL + '/tipoExped/');
        }
    };
}]);