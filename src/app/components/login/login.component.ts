import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg = '';

  constructor(private router: Router, private loginService: LoginService) {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe(
      data => console.log(data),
      error => console.log(`Ha l error : ${ error.statusText}`)
    );
  }

  handleResponse(res) {
    // this.tokenService.handle(res);
    // this.accountService.changeStatus(true);
    // this.router.navigateByUrl('/');
  }

}
