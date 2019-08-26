import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  @ViewChild("modal")
  private modal

  private formGroup: FormGroup

  private error = ''

  public modalOptions: Materialize.ModalOptions = {
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
  };
  

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  ngOnInit() {
  }

  login(){
    this.lock()
    this.loginService.login(this.formGroup.controls['email'].value, this.formGroup.controls['password'].value).subscribe(
      response => {
        console.log(response)
        if (response === true) {
          this.router.navigate(['dashboard/phones'])
          this.unlock()
        }
      },
      error => {
        this.error = error.message;
        this.modal.openModal()
        this.unlock()
      },
    )
  }

  private lock(){
    this.formGroup.controls['email'].disable()
    this.formGroup.controls['password'].disable()
  }

  private unlock(){
    this.formGroup.controls['email'].enable()
    this.formGroup.controls['password'].enable()
  }

}
