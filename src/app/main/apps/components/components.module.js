(function ()
{
 'use strict';

 angular
         .module('app.components', [])
         .config(config);

 /** @ngInject */
 function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider) {


//State
  $stateProvider.state('app.component', {
   abstract: true,
   url: '/component',
   views: {
    'content@app': {
     templateUrl: 'src/app/main/apps/components/component.html',
     controller: 'ComponentController as componentCtrl'
    }
   }
  }).state('app.component.calibrate', {
   url: '/calibrate',
   views: {
    'component': {
     templateUrl: 'src/app/main/apps/components/component.html',
     controller: 'ComponentController as componentCtrl'
    }
   }
  });

  // Translation
  $translatePartialLoaderProvider.addPart('src/app/main/apps/components');

  // Api
  msApiProvider.register('components.components', ['/api/components/animal/:animal/page/:page',
   {
    animal: "@animal",
    page: "@page"
   }]);
  msApiProvider.register('components.component.calibrate', ['/api/components/component/calibrate',
   {}]);
 }

})();