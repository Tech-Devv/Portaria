<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaginaController extends Controller
{

public function PaginaInicial()
{
  // Logica para a pagina inicial
  return view('pagina-inicial');

}

public function HistoricoDeControle()
{
  // Logica para o Histórico de controle
  return view('Historico-de-controle');

}



}
