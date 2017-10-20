import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() {
    console.log("Constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");

    this.name = 'Tyler Thompson';
    this.age = 28;
    this.email = 'tylerthompson92@gmail.com';
    this.address = {
      street: '3530 Copthorne Drive',
      city: 'Galena',
      state: 'Ohio'
    }
    this.hobbies = ['write code', 'watch movies', 'listen to music'];
  }

  buttonPress() {
    this.name = 'Another Name goes here';
    this.hobbies.push('New Hobby here!');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

//this interface could be elsewhere and Imported! (MODELS FILE?)
interface Address {
  street: string;
  city: string;
  state: string;
}
