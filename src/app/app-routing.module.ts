import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/pages/cliente/cliente.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';

const routes: Routes = [
  {path: '', component: ClienteComponent},
  {path: 'cadastro-cliente', component: CadastroComponent},
  {path: 'editar-cliente/:id', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
