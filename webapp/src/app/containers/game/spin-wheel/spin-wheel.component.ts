import {Component} from '@angular/core';

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.scss']
})
export class SpinWheelComponent {

  doneSpinning($event: number | "Swap") {
    console.log(`The wheel landed on ${$event}`);
  }

}
