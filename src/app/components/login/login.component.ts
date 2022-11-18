import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup
  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthService) {
    this.formLogin = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }


  // login() {
  //   this.router.navigate(['cadastro'])
  // }

  login() {
    if (this.formLogin.valid) {
      this.auth.login(this.formLogin.value).then((user)=>{
        console.log(user)
        this.router.navigate(['cadastro'])
      }).catch((error)=>{
        console.log(error)
      })
    }
  }

}
