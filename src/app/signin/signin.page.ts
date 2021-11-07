import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss'],
})
export class SignIn {
  constructor(private route: Router) {}

  signin() {
    this.route.navigate(['/masterlist']);
  }
}
