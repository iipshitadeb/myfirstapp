import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email :  ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      access: ['']
    });
  }
  get f() { return this.form.controls; }

  onSubmit() {
          this.submitted = true;

          if (this.form.invalid) {
              return "Entered details are invalid";
          }

          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value))
      }
}
