<?php namespace  App\Models;

 use Illuminate\Database\Eloquent\Model;
 

 class User extends Model
 {
     protected $table = 'users';
     protected $fillable = ['username','api_token','password'];
     protected $hidden = ['password'];
     public $timestamps = false;     
 }