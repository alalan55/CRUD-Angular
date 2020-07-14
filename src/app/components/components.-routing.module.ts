import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PrincipalPageComponent } from './paginaPrincipal/principal.component';
import { CadastroComponent } from './paginaPrincipal/cadastro/cadastro.components';
import { CadastradosComponent } from './paginaPrincipal/cadastrados/cadastrados.component';
import { EditarComponent } from './paginaPrincipal/editar/editar.component';



const componentRoutes =[
   
    {
        path: '',
        component: PrincipalPageComponent,
        children:[
            {
                path:'',
                component: CadastroComponent,
            },
            {
                path: 'cadastrados',
                component: CadastradosComponent,
            },
            {
                //se eu passar o /:id ele da um erro, porque não acha uma rota para pegar o 
                //id e passar nele
                path: 'editar/:id',
                // path: 'editar',
                component: EditarComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(componentRoutes)],
    exports:[RouterModule]
})
export class ComponentsRoutingModule{}