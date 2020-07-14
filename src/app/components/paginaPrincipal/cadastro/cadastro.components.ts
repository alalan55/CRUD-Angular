import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Cliente } from '../../model/cliente';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

    cliente = {} as Cliente;
    clientes: Cliente[];

    cadastroForm: FormGroup;

    constructor(private fb: FormBuilder,
        private clientService: ClientService){}

    ngOnInit(): void {
       this.criarFormulario();
    }

    // enviarDados(form: NgForm){
    //     console.log(this.cadastroForm.value);
    //     this.clientService.CadastrarCliente(this.cliente).subscribe();

    // }



    enviarDados(){
        //para verificar no console como é enviado
        console.log(this.cadastroForm.value);
        
        this.clientService.CadastrarCliente(this.cadastroForm.value)
        .subscribe((data)=>{
            console.log('form enviado', data)
        });

    }
    // resetForm(){
    //     this.cadastroForm.reset();
    // }
   


    // enviarDados(form){
    //    if(this.cliente.id !==undefined){
    //        this.clientService.UpdateCliente(this.cliente).subscribe(()=>{
    //         this.cleanForm(form);
    //        });
    //    }else{
    //     this.clientService.CadastrarCliente(this.cliente).subscribe(()=>{
    //         this.cleanForm(form);
    //     });
    //    }

    // }

     // Chama o serviço para obtém todos os clientes
//   getClients() {
//     this.clientService.getClientes().subscribe((clientes: Cliente[]) => {
//       this.clientes = clientes;
//     });
//   }
//     // limpa o formulario
//   cleanForm(form: NgForm) {
//     this.getClients();
//     form.resetForm();
//     this.cliente = {} as Cliente;
//   }

 
    criarFormulario(){
        this.cadastroForm = this.fb.group({
            nome:
             [
                 '',
                 Validators.compose([
                     Validators.required,
                     Validators.minLength(3),
                     Validators.maxLength(13)
                 ])
            ],
            sobreNome:
            [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(15),
                ])
            ],
            telefone: 
            [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(13)
                ])
            ],
            email:
            [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.email,
                
                ])
            ],
            cep:
            [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(10)
                ])
            ],
            localidade:
            [
                '',
                Validators.compose([
                    Validators.minLength(5),
                    Validators.maxLength(30)
                ])
            ],
            observacoes:
            [
                '',
                Validators.compose([
                    Validators.maxLength(300)
                ])
            ]
        })
    }
} 