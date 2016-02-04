var api = angular.module('itemFactory', []);

api.factory('itemsApi', ['$http', function( $http ) {

  var baseUrl = 'http://localhost:8080/api/items/';

  var itemsArray = {};

  itemsArray.getAll = function() {
    return $http.get( baseUrl );
  }

  itemsArray.addItem = function( newItem ){
    var payload = { item: newItem };
    return $http.post( baseUrl, payload );
  }

  return itemsArray;

}]);
