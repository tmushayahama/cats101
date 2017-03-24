(function ()
{
 'use strict';

 angular
         .module('app.components')
         .controller('ComponentsController', ComponentsController);

 /** @ngInject */
 function ComponentsController($document, $timeout, $scope, $mdSidenav, ComponentService, $mdDialog)
 {
  var vm = this;

  //Methods
  vm.calibrateComponent = calibrateComponent;

  function calibrateComponent(component) {
   ComponentService.calibrateComponents(component).then(function (data) {
   });
  }

 }

})();