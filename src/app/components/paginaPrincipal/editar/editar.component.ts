import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ClientService } from '../../services/client.service';


import { Router , ActivatedRoute} from '@angular/router';
import { Cliente } from '../../model/cliente';

@Component({
    selector: 'app-editar',
    templateUrl: 'editar.component.html',
    styleUrls: ['editar.component.scss']
})
export class EditarComponent implements OnInit{

    cliente: Cliente;
    editaForm: FormGroup;
    id: number;

    constructor( private fb: FormBuilder,   
                 private clientService: ClientService,
                 private route: Router, 
                 private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        this.criarFormulario();
        //com essa linha abaixo eu tiro o erre que aparece no conseole, nome de undefined
        this.cliente = new Cliente();
        this.id = this.activatedRoute.snapshot.params['id']
        this.getCliente(this.id);
    }

   
    getCliente(id: number){
        this.clientService.getClienteId(id).subscribe(
            (data)=>{
                console.log(data)
                this.cliente = data;
                this.editaForm.setValue({
                    nome: data.nome,
                    sobreNome: data.sobreNome,
                    telefone: data.telefone,
                    email: data.email,
                    cep: data.cep,
                    localidade: data.localidade,
                    observacoes: data.observacoes
                })
            }
         );
    }

    // editarCliente(){
    //     this.clientService.UpdateCliente(this.id, this.cliente)
    //     .subscribe(data => console.log('Dados Retornados do novo cliente:',data));
    //     this.cliente = new Cliente();
    //     this.voltarParaCadastrados();

    // }
    
    atualizarDados(form: NgForm){
        this.clientService.UpdateCliente(this.id, form)
        .subscribe(data => console.log('Dados Retornados do novo cliente:', data));
        this.voltarParaCadastrados();

    }

    // atualizarDados(){
    //     this.editarCliente();
    // }

    voltarParaCadastrados(){
        this.route.navigate(['/cadastrados']);
        this.getClientes();
    }
    getClientes(){
        this.clientService.getClientes().subscribe();
    }
    
    criarFormulario(){
        this.editaForm = this.fb.group({
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