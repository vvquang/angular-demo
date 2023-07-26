import { Component, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '@app/services/auth.service'
import { StoreService } from '@app/services/store.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AuthService],
})
export class LoginComponent {
  error: string | null = null
  public formGroup!: FormGroup<{
    email: FormControl<string>
    password: FormControl<string>
  }>

  constructor(
    private router: Router,
    public storeService: StoreService,
    private authService: AuthService
  ) {
    this.initFormGroup()
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      email: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required, Validators.email], nonNullable: true }
      ),
      password: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    })
  }

  public async onSubmit(): Promise<void> {
    if (!this.formGroup.valid) {
      this.error = 'Please enter email or password correct!'
      return
    }

    this.storeService.setIsLoading(true)

    const { email = '', password = '' } = this.formGroup.value
    const success = await this.authService.authenticate(email, password)

    this.storeService?.setIsLoading(false)

    if (!success) return

    // NOTE Redirect to home
    this.router.navigate(['/'])
  }
}
