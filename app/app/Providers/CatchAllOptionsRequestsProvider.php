<?php namespace App\Providers;
use Illuminate\Support\ServiceProvider;
/**
 * If the incoming request is an OPTIONS request
 * we will register a handler for the requested route
 */
class CatchAllOptionsRequestsProvider extends ServiceProvider {
  public function register()
  {    
    
    if ($_SERVER["REQUEST_METHOD"]=="OPTIONS")
    {      
      app()->options($_SERVER["PATH_INFO"], function() { return response('', 200); });
    }
  }
}