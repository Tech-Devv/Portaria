<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\PaginaController;

Route::get('/', [PaginaController::class, 'PaginaInicial']);
Route::get('/ HistoricoDeContole', [PaginaController::class, 'HistoricoDeContoler']);




