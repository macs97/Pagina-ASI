<?php

namespace App\Http\Controllers;
use App\Models\Datos;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DatosContoller extends Controller
{
    function getAll(Request $request){
        if($request->isJson()){
        $datos = Datos::all();
        return response()->json($datos,200);
        }
        else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    function createDatos(Request $request){
        if($request->isJson()){
            try{
                $data = $request->json()->all();
                //$data['idUser']
                $user = User:: where('api_token', $data['idUser'])->first();                 
                $datos = Datos::create([   
                                 
                    'justificacion'   => $data['justificacion'],
                    'porcentaje'   => $data['porcentaje'],                      
                    'idUser' => $user['id'], 
                    'idItem'  => $data['idItem']          
                ]);
                return response()->json($user, 201);
            }
            catch(ModelNotFoundException $e)
            {
                return response()->json(['error'=>'No content'],406);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }
}
