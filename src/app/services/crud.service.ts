
import { Injectable, InjectFlags, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from '../models/Paciente.models';



@Injectable({
  providedIn: 'root'
})
export class CrudService implements OnInit {
  public lista: any
  datasource = new MatTableDataSource();


  constructor(private afd: AngularFirestore, private afa: AngularFireAuth) {
    this.list()
  } // Instanciando firebase

  ngOnInit(): void {

  }

  salvar(paciente: Paciente) { //verifica se está atendendo aos requisitos da interface

    paciente.id == '' ? paciente.id = this.afd.createId() : paciente.id = paciente.id

    return this.afd.collection('pacientes').doc(paciente.id).set(paciente, { merge: true })
  }

  update(paciente: Paciente) {
    return this.afd.collection('pacientes').doc(paciente.id).set(paciente, { merge: true })
  }

  list() {
    this.lista = this.afd.collection('pacientes').valueChanges()
  }

  listById() {

  }

  delete(id: string) {
    return this.afd.collection('pacientes').doc(id).delete()
  }

  listar() {

    return this.afd.collection('pacientes').valueChanges().subscribe(res => this.datasource.data = res)
  }

}