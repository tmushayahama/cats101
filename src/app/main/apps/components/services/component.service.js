(function ()
{
 'use strict';

 angular
         .module('app.components')
         .factory('ComponentService', ComponentService);

 /** @ngInject */
 function ComponentService(msApi, $q) {
  var service = {
   data: [],
   food: [
    {
     'name': 'mouse',
     'animal': 'cat',
     'total': 10
    },
    {
     'name': 'treat',
     'animal': 'dog',
     'total': 10
    },
    {
     'name': 'worm',
     'animal': 'chicken',
     'total': 10
    }],
   getComponentByLocation: getComponentByLocation
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
  function getComponentByLocation(x, y) {
   // Create a new deferred object
   var deferred = $q.defer();

   msApi.request('components.componentByLocation@get',
           {
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

  return service;

 }
})();