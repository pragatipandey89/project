import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  myreact: any = FormGroup;

  constructor(private readonly routes: Router) {}

  ngOnInit(): void {
    this.myreact = new FormGroup({
      Password: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.myreact.value);
    this.routes.navigate(['./seller'], {
      queryParams: { name: this.myreact.value.email },
    });
  }
}
