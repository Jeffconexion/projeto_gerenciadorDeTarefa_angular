import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm | undefined;

  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private route: ActivatedRoute, private router: Router) {
    this.tarefa = new Tarefa();

   }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];//de onde vem esse cara??
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void{
    debugger;
    if(this.formTarefa?.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
