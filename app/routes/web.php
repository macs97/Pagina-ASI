<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->post('/login', ['uses'=>'UsuarioController@login']);
$app->get('/login', ['uses'=>'UsuarioController@getAll']);
$app->post('/registro', ['uses'=>'UsuarioController@createUser']);
$app->post('/crear', ['uses'=>'DatosContoller@createDatos']);
$app->get('/crear', ['uses'=>'DatosContoller@getAll']);

$app->group(['middleware' => 'auth'], function () use ($app) {
    $app->get('/1', ['uses'=>'ItemController@getAll1']);
    $app->get('/2', ['uses'=>'ItemController@getAll2']);
    $app->get('/3', ['uses'=>'ItemController@getAll3']);
    $app->get('/4', ['uses'=>'ItemController@getAll4']);
    //$app->post('/1', ['uses'=>'ItemController@createItem']);
    $app->put('/1/{id}', ['uses'=>'ItemController@updateItem']);
    $app->delete('/1/{id}', ['uses'=>'ItemController@deleteItem']);
});

