import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit {

  constructor(private apiService: ApiService){}

  clientes : any;

  ngOnInit(): void {
    //this.getAll();
  }


  /*getAll() {
    this.apiService.getAll().subscribe((response: any) => {
      this.clientes = response;
    })
  }
  */
}
