import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-part8';
  //without Grouping
  // name = new FormControl('deefaultaman');
  // password = new FormControl('defaultPssword');

  // displayValue() {
  //   console.log(this.name.value);
  //   console.log(this.password.value);
  // }

  // setValues() {
  //   this.name.setValue('partener');
  //   this.password.setValue('123');
  // }

  //with grouping

  // profileForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(5),
  //   ]),
  //   email: new FormControl('default  ', [
  //     Validators.required,
  //     Validators.maxLength(50),
  //     Validators.pattern(
  //       '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,25}'
  //     ),
  //   ]),
  // });

  // onSumbmit() {
  //   console.log(this.profileForm.value);
  // }

  // get name() {
  //   return this.profileForm.get('name');
  // }
  // get password() {
  //   return this.profileForm.get('password');
  // }
  // get email() {
  //   return this.profileForm.get('email');
  // }

  // setValue() {
  //   this.profileForm.setValue({
  //     name: 'Dev',
  //     password: 'Dev123',
  //     email: 'dev@gmail.com',
  //   });
  // }

  // templeteDrivenForm

  userDetails: any;

  addDetails(val: NgForm) {
    console.log(val);
    this.userDetails = val;
  }
}
