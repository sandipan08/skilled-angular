import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-unemployed',
  templateUrl: './unemployed.component.html',
  styleUrls: ['./unemployed.component.css']
})
export class UnemployedComponent implements OnInit {
  unemployedForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.unemployedForm.value);
  }
}
