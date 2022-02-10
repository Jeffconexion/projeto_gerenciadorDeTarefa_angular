import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  //@ViewChild('formTarefa') formTarefa: NgForm;
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm | undefined;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) {
    this.tarefa = new Tarefa();

  }

  ngOnInit() { }

  cadastrar(): void {
    if (this.formTarefa?.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["tarefas"]);
    }
  }

}
