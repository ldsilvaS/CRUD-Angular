import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  postCliente(form: any) {

    return this.httpClient.post<any[]>('https://www.webuprs.com.br/lucasteste/postCliente.php', form)

  }


  /*getAll() {
    return this.httpClient.get<any[]>('https://www.webuprs.com.br/lucasteste/getCliente.php');
  }*/
}
