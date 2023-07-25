import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { StoreService } from '@app/services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ AuthService ]
})
export class LoginComponent {
  error: string | null = null;
  public formGroup !: FormGroup<{
    email    : FormControl<string>,
    password : FormControl<string>,
  }>;

  constructor
  (
    private router       : Router,
    public storeService : StoreService,
    private authService   : AuthService,
  )
  {
    this.initFormGroup();
  }

  private initFormGroup() : void
  {
    this.formGroup = new FormGroup({
      email      : new FormControl<string>({
        value    : '',
        disabled : false
      }, { validators : [Validators.required, Validators.email], nonNullable : true }),
      password   : new FormControl<string>({
        value    : '',
        disabled : false
      }, { validators : [Validators.required], nonNullable : true })
    });
  }

  public async onSubmit(): Promise<void> {
    console.log('hehe', this.formGroup)
    this.storeService?.setIsLoading(true);

    // const email    = this.formGroup.controls.email.getRawValue();
    // const password = this.formGroup.controls.password.getRawValue();
    const email    = this.formGroup.value.email || '';
    const password = this.formGroup.value.password || '';
    const success  = await this.authService.authenticate(email, password);

    this.storeService?.setIsLoading(false);

    if (!success) return;

    // NOTE Redirect to home
    this.router.navigate(['/']);
  }
}
