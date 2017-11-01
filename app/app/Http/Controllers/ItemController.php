<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
    function getAll1(Request $request){
        if($request->isJson()){        
            $item = DB::table('item')
            ->select(DB::raw('*'))
            ->where('tipo', '=', 1)        
            ->get();
        return response()->json($item,200);
        }else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    function getAll2(Request $request){
        if($request->isJson()){        
            $item = DB::table('item')
            ->select(DB::raw('*'))
            ->where('tipo', '=', 2)        
            ->get();
        return response()->json($item,200);
        }else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    function getAll3(Request $request){
        if($request->isJson()){        
            $item = DB::table('item')
            ->select(DB::raw('*'))
            ->where('tipo', '=', 3)        
            ->get();
        return response()->json($item,200);
        }else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    function getAll4(Request $request){
        if($request->isJson()){        
            $item = DB::table('item')
            ->select(DB::raw('*'))
            ->where('tipo', '=', 4)        
            ->get();
        return response()->json($item,200);
        }else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    function createItem(Request $request){
        if($request->isJson()){
            try{
                $data = $request->json()->all();
                $item = Item::create([   
                                 
                    'nombre' => $data['nombre'],
                    'tipo' => $data['tipo']               
                ]);
                return response()->json($item, 201);
            }
            catch(ModelNotFoundException $e)
            {
                return response()->json(['error'=>'No content'],406);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    function updateItem(Request $request, $id){
        if($request->isJson()){
            try{
                $item = Item::findOrFail($id);
                $data = $request->json()->all();
                $item->nombre = $data['nombre'];
                $item->tipo = $data['tipo'];
                $item->save();
                return response()->json($item,200);
            }
            catch(ModelNotFoundException $e)
            {
                return response()->json(['error'=>'No content'],406);
            }
        }
        else{
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }

    function deleteItem(Request $request, $id){
        if($request->isJson()){
            try{
                $item = Item::findOrFail($id);
                $item->delete();
                return response()->json($item,200);
            }
            catch(ModelNotFoundException $e)
            {
                return response()->json(['error'=>'No content'],406);
            }
        }
        else{
            return response()->json(['error' => 'Unauthorized'], 401, []);
        }
    }
}
