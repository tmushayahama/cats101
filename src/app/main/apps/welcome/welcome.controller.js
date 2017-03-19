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
  vm.components = [];

  //Method
  vm.getComponent = getComponent;



  function getComponent(event) {
   ComponentService.getComponent(event.pageX, event.pageY).then(function (data) {
    vm.component = data;
   });
  }
 }
})();