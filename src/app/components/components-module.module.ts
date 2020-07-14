import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { SharedModule } from './shared/shared.module';
import { PrincipalPageComponent } from './paginaPrincipal/principal.component';

import { ComponentsRoutingModule } from './components.-routing.module';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './paginaPrincipal/cadastro/cadastro.components';
import { CadastradosComponent } from './paginaPrincipal/cadastrados/cadastrados.component';
import { EditarComponent } from './paginaPrincipal/editar/editar.component';
import { VmessageModule } from './shared/Vmessage/vmessage.module';




@NgModule({
  declarations: 
  [
    PrincipalPageComponent,
    CadastroComponent,
    CadastradosComponent,
    EditarComponent
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})
export class ComponentsModule { }
