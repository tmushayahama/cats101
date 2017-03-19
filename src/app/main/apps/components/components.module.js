(function ()
{
 'use strict';

 angular
         .module('app.components', [])
         .config(config);

 /** @ngInject */
 function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
 {

  // Translation
  $translatePartialLoaderProvider.addPart('src/app/main/apps/components');

  // Api
  msApiProvider.register('components.componentByLocation', ['/api/components/component/x/:x/y/:y',
   {
    x: "@x",
    y: '@y'
   }]);
 }

})();