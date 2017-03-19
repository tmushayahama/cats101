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

 //Constants
 Route::get('constants/all', 'ConstantsController@getConstants');
 Route::get('constants/level/{parent}', 'ConstantsController@getLevel');
 Route::get('constants/componenttypes', 'ConstantsController@getComponentTypes');

 //Search
 Route::get('search/keyword/{keyword}', 'SearchController@keywordSearch');
 Route::get('search/suggestion/keyword/{keyword}', 'SearchController@suggestionSearch');

 //Profile
 Route::get('profile/{id}/connections', 'Profile\ProfileController@getUserConnections');
 Route::get('profiles/all', 'Profile\ProfileController@getProfilesAll');
 Route::get('profile/{id}/sections', 'Profile\ProfileController@getUserProfileSections');
 Route::get('profile/{id}', 'Profile\ProfileController@getProfile');
 Route::post('user/request/create', 'Community\CommunityController@createRequest');


 //Component
 Route::get('components/component/x/{x}/y/{y}', 'Component\ComponentController@getComponentByLocation');
});
