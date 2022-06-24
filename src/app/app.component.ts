import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { ROUTES } from './constants/routing.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// interface RoutesInterface {
//   name: string;
//   url: string;
// }
export class AppComponent{

  showSideNav: BooleanInput = false;
  // routes : RoutesInterface[] = ROUTES;
  routes = ROUTES;

  toggleSideNav = () => {
    console.log('toggleSideNav', this.showSideNav)
    this.showSideNav = !this.showSideNav
  }

}
