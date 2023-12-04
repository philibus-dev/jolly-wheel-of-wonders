import { Component, Input, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Input() currUser: string | undefined;

  constructor(
    public router: Router, 
    public fbAuth: AngularFireAuth) {}

  logout() {
    this.fbAuth.signOut();
    this.router.navigate(['/']);
  }

}
