var itemController = angular.module('itemController', []);

itemController.controller('items', ['$scope','itemsApi', function( $scope, itemsApi ) {

  $scope.items = [];

  $scope.newItem = {
    title: 'Item Name',
    price: 0,
    url: 'Photo Url',
    category: 'Unsorted',
    description: 'Description',
  }

  $scope.masterItem = angular.copy( $scope.newItem );

  $scope.updateItems = function(){
    itemsApi.getAll().then(function( response ){
      $scope.items = response.data.items;
    });
  }

  $scope.addItem = function() {
    itemsApi.addItem( $scope.newItem ).then(function(){
      $scope.updateItems();
      $scope.newItem = angular.copy( $scope.masterItem )
    });
  }

  $scope.updateItems();
}]);
