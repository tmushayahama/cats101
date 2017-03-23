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
  vm.chooseFood = chooseFood;

  init();

  function init() {
   ComponentService.getComponentByLocation(1, 0, 0).then(function (data) {
    vm.component = data;
   });
   chooseFood(vm.foods.options[0]);
  }

  function getComponentByLocation(event) {
   var x = event.pageX;
   var animal = vm.foods.selected.animal;
   ComponentService.getComponentByLocation(animal, event.pageX, event.pageY).then(function (data) {
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