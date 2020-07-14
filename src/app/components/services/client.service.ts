import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError,  } from 'rxjs';
import { Cliente } from '../model/cliente';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ClientService{

    url = 'http://localhost:3000/cliente';

    //injetando o HttpClient

    constructor( private http: HttpClient){}

     // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

    //obter todos os clientes

    getClientes(): Observable<Cliente[]>{
        return this.http.get<Cliente[]>(this.url).pipe(retry(2))
    }

    //obter cliente po ID

    // getClienteId(id: number): Observable<Cliente>{
    //     return this.http.get<Cliente>(this.url + '/' + id).pipe(retry(2))

    getClienteId(id: number): Observable<Cliente>{
      const url = `${this.url}/${id}`
      return this.http.get<Cliente>(url).pipe(retry(1))


    }
    //Cadastrar um cliente
    CadastrarCliente(cliente: Cliente): Observable<Cliente>{
        // return this.http.post<Cliente>(this.url, JSON.stringify(cliente),this.httpOptions).pipe(retry(2))
        return this.http.post<Cliente>(this.url, JSON.stringify(cliente), this.httpOptions).pipe(retry(1))
    }

    //Atualizar um cliente

    // UpdateCliente(id:number, cliente): Observable<Cliente>{
    //   const url = `${this.url}/${id}`
    //     return this.http.put<Cliente>(url, cliente, this.httpOptions).pipe(retry(2))
    // }
    // UpdateCliente(cliente: Cliente): Observable<Cliente>{
    //   const url = `${this.url}/${cliente.id}`
    //     return this.http.put<Cliente>(url, cliente, this.httpOptions).pipe(retry(2))
    // }
    UpdateCliente(id:number, value: any): Observable<Cliente>{
        return this.http.put<Cliente>(`${this.url}/${id}`, value, this.httpOptions).pipe(retry(1))
    }


    // Deletar um Cliente

    // DeleteCliente(cliente: Cliente){
    //     return this.http.delete<Cliente>(this.url + '/' + cliente.id, this.httpOptions)
    //     .pipe(retry(1),
    //     catchError(this.handleError)
    //     )
    // }


    DeleteCliente(id:number):Observable<Cliente>{
        const url = `${this.url}/${id}`;
        return this.http.delete<Cliente>(url, this.httpOptions)
        .pipe(retry(1))

    }



      // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


//daqui para baixo são teste

// public cliente: Cliente;

// setCliente(cliente: Cliente){
//   this.cliente = cliente;
// }

// getPessoa(){
//   return this.cliente;
// }

}