(function ()
{
 'use strict';

 angular
         .module('app.components')
         .factory('ComponentService', ComponentService);

 /** @ngInject */
 function ComponentService(_, msApi, $q) {
  var service = {
   components: [],
   foods: {
    options: [
     {
      'name': 'mouse',
      'picture_url': 'mouse.png',
      'animal': 1,
      'total': 10
     },
     {
      'name': 'treat',
      'picture_url': 'treat.png',
      'animal': 2,
      'total': 10
     },
     {
      'name': 'worm',
      'picture_url': 'worm.png',
      'animal': 3,
      'total': 10
     },
     {
      'name': 'grass',
      'picture_url': 'grass.png',
      'animal': 4,
      'total': 10
     }
    ]
   },
   getComponent: getComponent,
   getComponents: getComponents
  };


  // ******************************
  // Internal methods
  // ******************************

  function deferredHandler(data, deferred, defaultMsg) {
   var error = '';
   if (!data || typeof data !== 'object') {
    error = 'Error';
   }
   if (!error && data.result && data.result.error) {
    error = data.result.error;
   }
   if (!error && data.error) {
    error = data.error.message;
   }
   if (!error && defaultMsg) {
    error = defaultMsg;
   }
   if (error) {
    return deferred.reject(data);
   }
   return deferred.resolve(data);
  }

  /**
   * Get component data from the server
   *
   * @returns promise of the deferred response
   */
  function getComponents(animal, page) {
   // Create a new deferred object
   var deferred = $q.defer();

   msApi.request('components.components@query',
           {
            animal: animal,
            page: page
           },
           function (response) {
            service.components = response;
            deferredHandler(response, deferred);
           },
           function (response) {
            deferred.reject(response);
           }
   );

   return deferred.promise;
  }

  /**
   * Get component data from the server
   *
   * @returns promise of the deferred response
   */
  function getComponentByLocation(animal, x, y) {
   // Create a new deferred object
   var deferred = $q.defer();

   msApi.request('components.componentByLocation@get',
           {
            animal: animal,
            x: x,
            y: y
           },
           function (response) {
            deferredHandler(response, deferred);
           },
           function (response) {
            deferred.reject(response);
           }
   );

   return deferred.promise;
  }

  /**
   * Get component from the local components
   *
   * @param animal The animal type
   * @returns promise of the deferred response
   */
  function getComponent(animal) {
   // Create a new deferred object
   var deferred = $q.defer();
   var animals = _.filter(service.components, {'type_id': animal});
   var result = _.sample(animals);

   deferredHandler(result, deferred);

   return deferred.promise;
  }

  return service;

 }
})();