import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent implements OnInit {

    public meuFormulario!: FormGroup | any;
    id: any
    cliente: any;
    ultimoId: any = 1;

  constructor(
      private formBuilder: FormBuilder,
      private apiService: ApiService,
      private location: Location,
      private route: ActivatedRoute,
      private toastr: ToastrService    // Pega a rota atual.
  ){}



  ngOnInit(): void {          // Inicia ao startar o servidor

    this.meuFormulario = this.formBuilder.group({  // Criando o formulário
      id: "",
      nome: ["", [Validators.required, Validators.minLength(3)]],
      telefone: ["", [Validators.required, Validators.minLength(11)]],
      email: ["", [Validators.required, Validators.email]],
      endereco: ["", Validators.required]
    })

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id)
        const cliente$ = this.apiService.getClienteById(id)
        cliente$.subscribe(cliente => {
          this.updateForm(cliente);

        })
      }
    )

    this.getAll();
  }





  showSuccess() {     // Mensagem de sucesso na tela com o ngx-toastr
    this.toastr.success('Cliente cadastrado', 'Sucesso');
  }

  showSuccessEdit() {  // Mensagem de sucesso na tela com o ngx-toastr
    this.toastr.success('Cliente editado', 'Sucesso');
  }

  showError() {   // Mensagem de erro a receber alguma informação invalida
    if(this.meuFormulario.get('nome').invalid){
      this.toastr.error('Nome não preenchido.', 'Erro ao salvar');
    }else if(this.meuFormulario.get('telefone').invalid) {
      this.toastr.error('Telefone não preenchido ou de forma incorreta.', 'Erro ao salvar');
    }else if(this.meuFormulario.get('email').invalid) {
      this.toastr.error('Email invalido ou não preenchido.', 'Erro ao salvar');
    }else if(this.meuFormulario.get('endereco').invalid) {
      this.toastr.error('Endereço não preenchido.', 'Erro ao salvar');
    }
  }

  updateForm(cliente:any) {  // Atualiza o formulário com os valores já preenchidos
    this.meuFormulario.patchValue({
      id: cliente.id,
      nome: cliente.nome,
      telefone: cliente.telefone,
      email: cliente.email,
      endereco: cliente.endereco
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

  postCliente() {   // Método POST. Dividido no PUT e POST.
    let formCliente = this.meuFormulario.getRawValue();     // Colocando dentro da variavel o valor do meu formulário.
    if(this.meuFormulario.invalid){
      this.showError();
      return;
    }else{
      if(this.meuFormulario.value.id) {    // Se o formulário tiver ID, chamo a função PUT
        this.apiService.putCliente(formCliente).subscribe((response:any) => {
          this.meuFormulario.reset();
          this.location.back();
          this.showSuccessEdit();
        })

      }else {   // Se não, chamo a função POST
        formCliente.id = `${this.ultimoId}`
        console.log(this.ultimoId)
        this.apiService.postCliente(formCliente).subscribe((response:any) => {
          this.meuFormulario.reset();
          this.location.back();
          this.showSuccess();
        })
      }
    }
  }

  getAll() {  // Função que pega os clientes econtrados na lista, para descobrir o ultimo ID
    this.apiService.getAll().subscribe((clientes: any[]) => {
      if(clientes.length > 0) {
        this.ultimoId = Math.max(...clientes.map(cliente => cliente.id)) + 1
        console.log(this.ultimoId);
      }
    })
  }




}
