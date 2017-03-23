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
  msApiProvider.register('components.components', ['/api/components/animal/:animal/page/:page',
   {
    animal: "@animal",
    page: "@page"
   }]);
 }

})();