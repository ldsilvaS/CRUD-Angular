import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {} // Para utilizar o put, preciso importar Router e ActivatedRoute

  clientes: any;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.apiService.getAll().subscribe((response: any) => {
      console.log(response);
      this.clientes = response;
    });
  }

  putCliente(id: any) {
    this.router.navigate(['editar-cliente', id], { relativeTo: this.route }); // Navego até a rota especifica do id.
  }
}
