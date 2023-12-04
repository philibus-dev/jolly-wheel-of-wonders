import { Component } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public fbAuth: AngularFireAuthModule){}

}
