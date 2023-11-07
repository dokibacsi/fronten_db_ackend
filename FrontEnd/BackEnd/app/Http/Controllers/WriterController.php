<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index(){
      $writers = Writer::all();
      return response()->json($writers);
    }

    public function show($id){
        $writers = response()->json(Writer::find($id));
        return $writers;
    }

    public function store(Request $request){
        $writers = New Writer();
        $writers->nev = $request->nev;
        $writers->szul = $request->szul;
        $writers->save();
    }

    public function update(Request $request, $id){
        $writers = Writer::find($id);
        $writers->nev = $request->nev;
        $writers->szul = $request->szul;
        $writers->save();
    }
    
}
