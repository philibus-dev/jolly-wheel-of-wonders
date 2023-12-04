import {Component, Inject} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  userForm!: FormGroup;
  loginRegisterMode: string = 'login';
  
  constructor(
    private fb: FormBuilder,
    public fbAuth: AngularFireAuth) {
    this.setupForm();
  }

  setupForm() {
    this.userForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    const {email, password} = this.userForm.value;

    this.fbAuth.signInWithEmailAndPassword(email, password)
    .then((response: any) => {
      console.log('response', response);
    })
    .catch((error: any) => {
      console.error(error);
    });

  }

  register() {
    const {email, password} = this.userForm.value;

    this.fbAuth.createUserWithEmailAndPassword(email, password)
    .then((response: any) => {
      console.log('response', response);
    })
    .catch((error: any) => {
      console.error(error);
    });
  }
  
}
