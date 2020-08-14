import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/user';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  genders: string[] = ['Masculino', 'Femenino'];
  form : FormGroup;
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  initForm() : FormGroup{
    return new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.email),
      gender: new FormControl("")
    });
  }

  get formControls(){
    return this.form.controls;
  }

  onSubmit(){
    const result : User = this.form.value;
    this.users.push(new User(result.id, result.name, result.gender, result.email));
    this.form.reset();
  }

}
