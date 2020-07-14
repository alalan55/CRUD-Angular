import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'app-CardCadastrados',
    templateUrl: './cardCadastrados.component.html',
    styleUrls: ['./cardCadastrados.component.scss']
})
export class CardCadastradosComponent{

    constructor(private route: Router){}

    goCadastrados(){
        this.route.navigate(['/principal/cadastrados'])
    }
}