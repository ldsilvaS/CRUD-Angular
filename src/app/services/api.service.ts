import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/clientes';


  postCliente(form: any) {

    return this.http.post<any[]>(`https://www.webuprs.com.br/lucasteste/postCliente.php`, form)

  }

  putCliente(form: any) {

    return this.http.post<any[]>(`https://www.webuprs.com.br/lucasteste/putCliente.php`, form)

  }

 

  getClienteById(id: any) {
    return this.http.get(`https://www.webuprs.com.br/lucasteste/getClienteById.php?id=${id}`)
  }

  getAll() {
    return this.http.get<any[]>(`https://www.webuprs.com.br/lucasteste/getCliente.php`);
  }
}
