import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthHttp } from '../../http/auth.http';
import { SignInDto } from '../../dto/sign-in.dto';
import { AppValidators } from '../../../../common/forms/validators';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.view.html',
  styleUrls: ['./sign-in.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent {
  private fb = inject(FormBuilder);
  private authHttp = inject(AuthHttp);
  showPasword = false;

  form: FormGroup<{
    email: FormControl;
    password: FormControl;
  }>
  constructor() {
    this.form = this.fb.group({
      // TODO: reemplazar Validators.email por validacion personalizada
      email: [null, [Validators.required, AppValidators.email]],
      password: [null, Validators.required]
    })
  }
  signIn() {
    if (this.form.invalid) return;
    //TODO llamar al servicio http
    //getRowValue Trae todos los valores aun asi esten habilitados o deshabilitados
    this.authHttp.getToken(this.form.getRawValue());
    //No devuelve los datos deshabilitados
    this.authHttp.getToken(this.form.value as SignInDto).subscribe(console.log);
  }
}
