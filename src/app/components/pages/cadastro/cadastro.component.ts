import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent implements OnInit {

    public meuFormulario: FormGroup | any

  constructor(private formBuilder: FormBuilder, private apiService: ApiService){}

  

  ngOnInit(): void {
    this.meuFormulario = this.formBuilder.group({
      nome: ["", Validators.required],
      telefone: ["", Validators.required],
      email: ["", Validators.required],
      endereco: ["", Validators.required]
    })
  }

  postCliente() {
    let formCliente = this.meuFormulario.getRawValue();     // Colocando dentro da variavel o valor do meu formulário.

    this.apiService.postCliente(formCliente).subscribe((response:any) => {
      console.log(response);
    })
  }

}
