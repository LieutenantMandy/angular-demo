import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  name = '';
  age = '';
  city = '';

  getValues(val:any)
  { 
    this.name = val.user;
    this.age = val.age;
    this.city = val.city;  
  }
}
