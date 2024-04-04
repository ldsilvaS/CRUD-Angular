import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent implements OnInit {

    public meuFormulario!: FormGroup | any;
    id: any
    cliente: any;

  constructor(
      private formBuilder: FormBuilder,
      private apiService: ApiService,
      private location: Location,
      private route: ActivatedRoute                        // Pega a rota atual.
  ){}



  ngOnInit(): void {
        
    this.meuFormulario = this.formBuilder.group({
      id: [null],
      nome: ["", [Validators.required, Validators.minLength(3)]],
      telefone: ["", [Validators.required, Validators.minLength(11)]],
      email: ["", [Validators.required, Validators.email]],
      endereco: ["", Validators.required]
    })

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id !== null){
      this.getCliente(this.id)
    }


  }

  putCliente() {
   
      let formCliente = this.meuFormulario.getRawValue();     // Colocando dentro da variavel o valor do meu formulário.
      formCliente.id = this.id;
      if(this.meuFormulario.invalid){
        return;
      }else{
        this.apiService.putCliente(formCliente).subscribe((response:any) => {
          console.log(response);
          this.meuFormulario.reset();
          this.location.back();
        })
      }
  }

  getCliente(id: any) {
    this.apiService.getClienteById(id).subscribe((response: any) => {
      this.cliente = response;
      this.meuFormulario.controls['nome'].setValue(this.cliente.nome)
      this.meuFormulario.controls['telefone'].setValue(this.cliente.telefone)
      this.meuFormulario.controls['email'].setValue(this.cliente.email)
      this.meuFormulario.controls['endereco'].setValue(this.cliente.endereco)
    });
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
        this.location.back();
      })
    }
  }

}
