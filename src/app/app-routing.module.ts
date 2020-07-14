import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalPageComponent } from './components/paginaPrincipal/principal.component';
import { CadastroComponent } from './components/paginaPrincipal/cadastro/cadastro.components';
import { CadastradosComponent } from './components/paginaPrincipal/cadastrados/cadastrados.component';
import { PaginaHomeComponent } from './components/paginaHome/paginaHome.component';



const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'principal'
  },
  {
    path: 'principal',
    loadChildren: ()=> import ('src/app/components/components-module.module').then(m =>m.ComponentsModule)
  },
  // {
  //   path: '',
  //   component: PaginaHomeComponent

  // }
  // {
  //   path: '',
  //   component: PrincipalPageComponent
  // },
  // {
  //   path:'cadastro',
  //   component: CadastroComponent
  // },
  // {
  //   path: 'cadastrados',
  //   component: CadastradosComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
