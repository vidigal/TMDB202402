import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent implements OnInit {
  
  ngOnInit(): void {
    let clienteSalvo = localStorage.getItem('cliente-salvo');
    if (clienteSalvo) this.cliente = JSON.parse(clienteSalvo);
    this.mapObjectToForm();
  }

  cliente: Cliente = new Cliente();

  clienteForm: FormGroup = new FormGroup({
    nome: new FormControl<string>(
      '', { validators: [Validators.required], updateOn: 'submit'}
    ),
    cpf: new FormControl<string>(
      '', { validators: [Validators.minLength(2), Validators.maxLength(11)], updateOn: 'submit'}
    ),
    email: new FormControl<string>(
      '', { validators: [Validators.email], updateOn: 'submit'}
    )

  });


  onSubmit() {
    this.clienteForm.markAllAsTouched();
    if (!this.clienteForm.valid) return;

    this.mapFormToObject();

    localStorage.setItem('cliente-salvo', JSON.stringify(this.cliente));
  }

  mapFormToObject() {
    this.cliente.nome = this.clienteForm.controls['nome'].value;
    this.cliente.cpf = this.clienteForm.controls['cpf'].value;
    this.cliente.email = this.clienteForm.controls['email'].value;
  }

  mapObjectToForm() {
    this.clienteForm.controls['nome'].setValue(this.cliente.nome);
    this.clienteForm.controls['cpf'].setValue(this.cliente.cpf);
    this.clienteForm.controls['email'].setValue(this.cliente.email);
  }

}
