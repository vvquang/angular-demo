import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  error: string | null = null;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor ( public  router       : Router ) {}

  submit() {
    if (this.form.valid) {
      this.router.navigate(['/']);
    }
  }
}
