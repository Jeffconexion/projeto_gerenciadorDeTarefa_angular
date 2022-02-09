import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';



export const TarefasRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarComponent
  },
];
