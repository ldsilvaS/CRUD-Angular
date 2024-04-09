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
    return this.http.post<any[]>(`${this.apiUrl}`, form)
  }

  putCliente(form: any) {
    return this.http.put<any[]>(`${this.apiUrl}/${form.id}`, form)
  }

  deleteCliente(id: any) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  getClienteById(id: any) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  getAll() {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

}
