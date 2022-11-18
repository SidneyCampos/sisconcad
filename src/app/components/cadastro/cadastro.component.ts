import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { Paciente } from 'src/app/models/Paciente.models';
import { CrudService } from 'src/app/services/crud.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formPaciente: FormGroup;



  constructor(private formBuilder: FormBuilder, public crud: CrudService) {
    this.formPaciente = formBuilder.group({
      id: [''],
      identificador_ficha: [''],
      nome: [''],//, Validators.compose([Validators.required, Validators.minLength(3)])],
      data_nascimento: [''],
      sexo: [''],
      mae: [''],
      estado_civil: [''],
      profissao: [''],
      naturalidade: [''],
      cpf: [''],
      rg: [''],
      endereco: [''],
      cidade: [''],
      data: [''],
      telefone: [''],
      anotacao: ['']
    })

  }


  ngOnInit(): void {

  }

  

  salvarPaciente() {
    if (this.formPaciente.valid) {
      this.crud.salvar(this.formPaciente.value).then((res) => {
        this.formPaciente.reset()
        this.formPaciente.patchValue(
          {
            id: '',
            identificador_ficha: '',
            nome: '',
            data_nascimento: '',
            sexo: '',
            mae: '',
            estado_civil: '',
            profissao: '',
            naturalidade: '',
            cpf: '',
            rg: '',
            endereco: '',
            cidade: '',
            data: '',
            telefone: '', 
            anotacao: ''
          }
        )
      }).catch((error) => {
        console.log(error)
      })
    } else {
      console.log("Preencha os dados obrigatórios!")
    }
  }

  LimparCampos() {
    this.formPaciente.reset()
  }


  edit(paciente: Paciente) {
    this.formPaciente.patchValue(
      {
        id: paciente.id,
        identificador_ficha: paciente.identificador_ficha,
        nome: paciente.nome,
        data_nascimento: paciente.data_nascimento,
        sexo: paciente.sexo,
        mae: paciente.mae,
        estado_civil: paciente.estado_civil,
        profissao: paciente.profissao,
        naturalidade: paciente.naturalidade,
        cpf: paciente.cpf,
        rg: paciente.rg,
        endereco: paciente.endereco,
        cidade: paciente.cidade,
        data: paciente.data,
        telefone: paciente.telefone,
        anotacao: paciente.anotacao
      }
    )

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  deletePaciente(id: string) {

    this.crud.delete(id).then((res) => {
      console.log("Produto excluído com Sucesso")
    }).catch((error) => {
      console.log(error)
    })

  }



}
