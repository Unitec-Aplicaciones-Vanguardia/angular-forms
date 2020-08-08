import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  genders: string[] = ['Masculino', 'Femenino']
  users: User[] = [];
  user : User;

  constructor() {
     this.user = new User(2, 'Maria', 'Femenino', 'maria@unitec.edu');
   }

  ngOnInit(): void {
    this.users.push(new User(1, 'Carlos', 'Masculino', 'carlos@unitec.edu'));
  }

  get element(){
    return JSON.stringify(this.user);
  }

  onSubmit(form){
    this.users.push(new User(this.user.id, this.user.name, this.user.gender, this.user.email ));
    form.reset();
  }

}
