import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
//triggers the events
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.less']
})
export class FormValidationComponent {

  formEmail:string = ''
  formPassword:string = ''
  formPasswordConfirm:string = ''

  constructor() {}

  //defining group of validators for form fields
  formValidation = new FormGroup({
    //validation of email field
    'email' :new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    //validation of password and confirm
    'password' :new FormControl(null, [
      Validators.required,
      CustomValidators.passwordsMatch(this).bind(this), //custom validation 
      CustomValidators.passwordLength().bind(this) //custom validation 
    ]),
    'passwordConfirm' :new FormControl(null, [
      Validators.required,
      CustomValidators.passwordsMatch(this).bind(this), //custom validation 
      CustomValidators.passwordLength().bind(this) //custom validation 
    ])
       
  })
  matcher = new MyErrorStateMatcher(); //init of the events , up

  //event after form confirm
  //just example
  confirmValidation() {
    alert("Stealing your creditials...")
  }

}


//custo validators for passwords
export class CustomValidators {

  //passing form and chechcking if passwords match 
  public static passwordsMatch(form:object) {
    return (control: FormControl): { [s: string]: boolean } => {
      if (form['formPassword'] !== form['formPasswordConfirm']) {
        return { 'passwordMismatch': true } //err if not
      } else {
        return null;
      }
    }
  }
  //password length control
  public static passwordLength() {
    return (control: FormControl): { [s: string]: boolean } => {
      if(control.value == null){
        return null
      }
     if (control.value.length < 8) {
        return { 'passwordShort': true } //err if not
      } else {
        return null;
      }
    }
  }


}
