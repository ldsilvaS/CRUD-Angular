import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCliente: HttpClient) {}

  postCliente(form: any) {

    return this.httpCliente.post<any[]>('https://www.webuprs.com.br/lucasteste/postCliente.php', form)

  }
}
