<?php namespace  App\Models;

 use Illuminate\Database\Eloquent\Model;
 

 class Datos extends Model
 {
     protected $table = 'datos';
     protected $fillable = ['id','justificacion', 'porcentaje', 'idUser','idItem'];
     public $timestamps = false;     
 }