import { AbstractControl, ValidationErrors } from '@angular/forms';

const PATTERN = /^(?![.])(([^<>()\[\]\\.,;:\s@"']+(\.[^<>()\[\]\\.,;:\s@"']+)*|"[^\\"]*")@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/
  ;
//Funcion
export const emailValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control?.value || '';
  const isValid = !value ? true : PATTERN.test(value);
  return isValid ? null : { email: 'El formato debe ser username@domain.com' };
}
