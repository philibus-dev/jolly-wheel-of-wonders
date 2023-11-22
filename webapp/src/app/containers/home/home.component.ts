import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  doneSpinning($event: number | "Swap") {
    console.log(`The wheel landed on ${$event}`);
  }
}
