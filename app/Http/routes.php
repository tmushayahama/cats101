<?php

/*
  |--------------------------------------------------------------------------
  | Skill Section Application Routes
  |--------------------------------------------------------------------------
  |
  | All of the routes for application are registered here. It is mapped to the
  | controller
  |
  |
 */

Route::get('/', function () {
 return view('index');
});

Route::group(['prefix' => 'api'], function() {
 //Auth
 Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
 Route::post('authenticate', 'AuthenticateController@authenticate');
 Route::post('register', 'AuthenticateController@register');
 Route::post('user/invite', 'AuthenticateController@invite');
 Route::get('logout', 'AuthenticateController@logout');
 Route::get('authenticate/user', 'AuthenticateController@getAuthenticatedUser');

 //Component
 Route::get('components/component/x/{x}/y/{y}', 'Component\ComponentController@getComponentByLocation');
});
