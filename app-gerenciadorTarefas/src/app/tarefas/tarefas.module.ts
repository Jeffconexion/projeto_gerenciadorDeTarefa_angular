import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';



@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
