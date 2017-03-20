(function ()
{
 'use strict';

 angular
         .module('app.welcome')
         .controller('WelcomeController', WelcomeController);

 /** @ngInject */
 function WelcomeController(ComponentService, $scope, $rootScope)
 {
  var vm = this;

  // Data
  vm.component = {};
  vm.foods = ComponentService.foods;

  //Method
  vm.getComponentByLocation = getComponentByLocation;

  init();

  function init() {
   ComponentService.getComponentByLocation(0, 0).then(function (data) {
    vm.component = data;
   });
  }

  function getComponentByLocation(event) {
   var x = event.PageX;
   ComponentService.getComponentByLocation(event.pageX, event.pageY).then(function (data) {
    vm.component = data;
   });
  }
 }
})();