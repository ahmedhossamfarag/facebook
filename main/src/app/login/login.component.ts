import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  cookie : CookieService = inject(CookieService)

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login(){
    this.cookie.set('facebook-username', this.loginForm.value.username ?? '', 0.01)
    window.location.reload()
  }
}
