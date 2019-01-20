import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  facebookLogin() {
    this.authService.facebookLogin()
      .then(res => {
        this.router.navigate(['/members']);
      });
  }

  twitterLogin() {
    this.authService.twitterLogin()
      .then(res => {
        this.router.navigate(['/members']);
      });
  }

  googleLogin() {
    this.authService.googleLogin()
      .then(res => {
        this.router.navigate(['/members']);
      });
  }

  login(value) {
    this.authService.login(value)
      .then(res => {
        this.router.navigate(['/members']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }
  resetPassword(email: string) {
    this.authService.resetPassword(email);
  }
}
