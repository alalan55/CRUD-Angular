import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Cliente } from '../../model/cliente';
import { ClientService } from '../../services/client.service';

@Component({
    selector: 'app-cadastrados',
    templateUrl: './cadastrados.component.html',
    styleUrls: ['./cadastrados.components.scss']
})
export class CadastradosComponent implements OnInit{
   

    cliente = {} as Cliente;
    clientes: Cliente[];

    constructor( private clienteService: ClientService, private route: Router){}

    ngOnInit(): void {
        this.getClientes();
    }


    //chama o serviço para obter todos os clientes
    getClientes(){
        this.clienteService.getClientes().subscribe((clientes: Cliente[])=>{
            this.clientes = clientes;
        });
    }

     
    //chama o serviço para deletar um cliente
    // deleteCliente(cliente: Cliente){
    //     this.clienteService.DeleteCliente(cliente).subscribe(()=>{
    //         this.getClientes();
    //     });
    // }

    deleteCliente(id){
        this.clienteService.DeleteCliente(id).subscribe(()=>{
            this.getClientes();
        });
       
    }

    //copia um cliente para ser editado

    // editCliente(cliente: Cliente){
    //     this.cliente = {...cliente};
    // }

     editar(id: number){
        //  this.clienteService.getClienteId(id).subscribe();
        //  //passei o /:id abaixo para tentar pegar o id
         this.route.navigate(['editar', id])
     }

  
// vaiParaEditarCliente(cliente: Cliente){
//         this.clienteService.setCliente(cliente);
//         this.route.navigate(['principal/editar']);
// }

}