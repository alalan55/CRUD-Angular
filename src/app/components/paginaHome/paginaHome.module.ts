import { NgModule } from '@angular/core';
import { PaginaHomeComponent } from './paginaHome.component';
import { CommonModule } from '@angular/common';
import { CardCadastrarComponent } from './cardCadastrar/cardCadastrar.component';
import { RouterModule } from '@angular/router';
import { CardCadastradosComponent } from './cardCadastrados/cardCadastrados.component';
import { JumbotromComponent } from './jumbotrom/jumbotrom.component';

@NgModule({
    declarations:
     [
        PaginaHomeComponent, CardCadastrarComponent, CardCadastradosComponent, JumbotromComponent
    ],
    imports:
     [
        CommonModule,
        RouterModule,

    ]
})
export class HomeModule{}