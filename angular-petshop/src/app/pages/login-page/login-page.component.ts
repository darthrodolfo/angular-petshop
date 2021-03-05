import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      username: [
        '',
        Validators.compose([
          Validators.minLength(14),
          Validators.maxLength(14),
          Validators.required,
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit(): void {
    const token = Security.getToken();

    if (token) {
      this.busy = true;
      this.dataService.refreshToken().subscribe(
        (data: any) => {
          this.busy = false;
          this.setUser(data.customer, data.token);
        },
        (errors: any) => {
          //console.log(errors);
          localStorage.clear();
          this.busy = false;
        }
      );
    }
  }

  submit() {
    this.busy = true;
    this.dataService.autheticate(this.form.value).subscribe(
      (data: any) => {
        this.busy = false;
        this.setUser(data.customer, data.token);
      },
      (error: any) => {
        //console.log(error);
        this.busy = false;
      }
    );
  }

  setUser(user: User, token: string) {
    Security.setAuthenticatedUser(user, token);
    this.router.navigate(['/']);
  }
}
