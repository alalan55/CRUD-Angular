import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-CardCadastrar',
    templateUrl: './cardCadastrar.component.html',
    styleUrls: ['cardCadastrar.component.scss']

})
export class CardCadastrarComponent{

    constructor(private route: Router){

    }

    goCadastrar(){
        this.route.navigate(['principal'])

    }
}