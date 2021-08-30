import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  signIn(): void {
    
  }

  private createForm(): void {
      this.login = this.formBuilder.group({
        email: ["", [
          Validators.required,
          Validators.email
        ]
      ],
      password: ["", [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }

}
