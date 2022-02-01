import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.tarefaService.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

}
