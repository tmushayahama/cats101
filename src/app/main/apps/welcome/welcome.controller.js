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
  vm.component = {};
  vm.foods = ComponentService.foods;
  vm.currentPage = 0;

  //Method
  vm.getComponent = getComponent;
  vm.chooseFood = chooseFood;

  init();

  function init() {
   chooseFood(vm.foods.options[0]);
   ComponentService.getComponents(vm.foods.selected.animal, vm.currentPage).then(function (data) {
    vm.components = data;
    vm.currentPage++;
   });

  }

  function getComponent(event) {
   var x = event.pageX;
   var animal = vm.foods.selected.animal;
   ComponentService.getComponent(animal).then(function (data) {
    vm.component = data;
    vm.component.pictureStyle = {
     'top': event.pageY - vm.component.location_y,
     'left': event.pageX - vm.component.location_x
    }
   });
  }

  function chooseFood(food) {
   vm.foods.selected = food;
  }

 }
})();