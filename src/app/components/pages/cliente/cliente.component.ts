import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) {} // Para utilizar o put, preciso importar Router e ActivatedRoute

  allClientes: any;
  clientes: any = null;
  clienteSelecionado: any;

  ngOnInit(): void {
    this.getAll();
  }

  deleteCliente(id: any) {   // Função de DELETE. Recebe o ID para identificar qual cliente sera deletado.
    this.clienteSelecionado = id
    this.apiService.deleteCliente(this.clienteSelecionado).subscribe(() => {
      this.getAll(); // Chama a função getAll() para atualizar a lista.
    });
    console.log(id);
  }

  getAll() {  // Função que lista os clientes
    this.apiService.getAll().subscribe((response: any) => {

      this.allClientes = response;

    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    if(value !== '') {
      this.allClientes = this.allClientes.filter((cliente:any) => {
        return cliente.nome.includes(value)
      })
    }else{
      this.getAll();
    }




    console.log(this.clientes);

    //this.ref.detectChanges();
  }

}
