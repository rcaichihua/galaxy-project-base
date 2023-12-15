import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { SignInDto } from "../dto/sign-in.dto";

@Injectable({
  //TODO cambiar esto para que solo
  providedIn: 'root'
})
export class AuthHttp {
  private http = inject(HttpClient);

  getToken(body: SignInDto) {
    return this.http.post('http://localhost:3000/api/auth/token', body)
  }
}
