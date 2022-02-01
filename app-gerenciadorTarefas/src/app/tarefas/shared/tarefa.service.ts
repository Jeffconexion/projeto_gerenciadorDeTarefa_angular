import { Tarefa } from './tarefa.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }


  listarTodos(): Tarefa[] {
    let tarefas;

    if (localStorage['Tarefas'] !== undefined)
      tarefas = JSON?.parse(localStorage['Tarefas']);

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

  remover(id: number): void {
    let tarefas = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    let tarefas = this.listarTodos();

    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
