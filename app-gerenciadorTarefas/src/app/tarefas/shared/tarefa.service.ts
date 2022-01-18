import { Tarefa } from './tarefa.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }


  listarTodos(): Tarefa[] {
    let tarefas = JSON.parse(localStorage['Tarefas']);

    if (tarefas) {
      return tarefas;
    }
    return [];
  }

  cadastrar(tarefa: Tarefa): void {
    let tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): any {
    let tarefas = this.listarTodos();
    return tarefas.find(element => element.id == id);
  }

  atualizar(tarefa: Tarefa): void {
    let tarefas = this.listarTodos();

    for (let index = 0; index < tarefas.length; index++) {
      if (tarefas[index].id == tarefa.id) {
        tarefas[index] = tarefa
      }
    }
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }





}
