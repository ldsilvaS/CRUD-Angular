import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent implements OnInit {

    public meuFormulario!: FormGroup | any

  constructor(private formBuilder: FormBuilder, private apiService: ApiService){}



  ngOnInit(): void {
    this.meuFormulario = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(3)]],
      telefone: ["", [Validators.required, Validators.minLength(11)]],
      email: ["", [Validators.required, Validators.email]],
      endereco: ["", Validators.required]
    })
  }

  get nome() {
    return this.meuFormulario.get('nome')!;
  }

  get telefone () {
    return this.meuFormulario.get('telefone')!;
  }

  get email() {
    return this.meuFormulario.get('email');
  }

  get endereco() {
    return this.meuFormulario.get('endereco')
  }


  postCliente() {
    let formCliente = this.meuFormulario.getRawValue();     // Colocando dentro da variavel o valor do meu formulário.
    if(this.meuFormulario.invalid){
      return;
    }else{
      this.apiService.postCliente(formCliente).subscribe((response:any) => {
        console.log(response);
        this.meuFormulario.reset();
      })
    }
  }

}
