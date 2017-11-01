<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UsuarioController extends Controller
{    
    
    function getAll(Request $request){
        if($request->isJson()){
        $user = User::all();
        return response()->json($user,200);
        }else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
    }
}
    function createUser(Request $request)
    {
        if($request->isJson()){
            $data = $request->json()->all();
            $user = User::create([   
                             
                'username' => $data['username'],
                'password' => Hash::make($data['password']),
                'api_token' => str_random(60)
            ]);
            return response()->json($user, 201);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
        
    }
    public function login(Request $request){  
        try{
          $data = $request->json()->all();      
          $user = User:: where('username', $data['username'])->first(); 
          //dd(Hash::check($user['password'], ));
          //dd(Hash::check(, ));
          if($user && !Hash::check($user->password, $data['password'])){
            $token=str_random(60);
            $user->api_token=$token;        
            $user->save();       
            return response()->json($user,200);
          }
          else{
            return response()->json(['error'=>'Datos invalidos'],200);
          }
        }
        catch(ModelNotFoundException $e)
        {
          return response()->json(['error'=>'Datos invalidos'],406);
        }
      }    
}
