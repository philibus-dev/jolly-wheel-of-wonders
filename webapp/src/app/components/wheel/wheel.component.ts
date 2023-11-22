import { Component, OnInit, Renderer2, ElementRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition, AnimationEvent, state } from '@angular/animations';

@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.scss',
  animations: [
    trigger('spinAnimation', [
      state('start', style({ transform: 'translateY(-50px)' })),
      state('step1', style({ transform: 'translateY(-550px)' })),
      state('step2', style({ transform: 'translateY(-2550px)' })),
      state('step3', style({ transform: 'translateY(-3550px)' })),
      transition('start => step1', animate('1500ms ease-in')),
      transition('step1 => step2', animate('3500ms')),
      transition('step2 => step3', animate('3000ms ease-out'))
    ])
  ]
})
export class WheelComponent implements OnInit {
  @Output() animationDone = new EventEmitter<number | "Swap">();
  wheelArray: (number | "Swap")[] = [100, 200, 300, 400, 500, 600, 700, 800, 900, "Swap"];
  multiWheelArray: (number | "Swap")[] = [];
  firstSpin = true;
  animationState = 'stopped';
  timeout1: number | undefined;
  timeout2: number | undefined;
  timeout3: number | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.createShuffledArray();
  }

  startSpin() {
    // Only shuffle the order after the first spin
    // Otherwise it will change the order when you first click to spin the wheel
    if (this.firstSpin) {
      this.firstSpin = false;
    } else {
      this.createShuffledArray();
    }
    // Remove the previous "highlight" effect on the previous winning number slot
    const thirtyEighthElement = this.el.nativeElement.querySelector('.wheel-option:nth-child(38)');
    this.renderer.removeClass(thirtyEighthElement, 'highlight');
    // Clear out previous timers in case the user clicks the Spin button too early
    window.clearTimeout(this.timeout1);
    window.clearTimeout(this.timeout2);
    window.clearTimeout(this.timeout3);
    this.animationState = 'start';
    // Kick off the animation steps at the right times based on how long they animate
    this.timeout1 = window.setTimeout(() => {
      this.animationState = 'step1';
    }, 0);
    this.timeout2 = window.setTimeout(() => {
      this.animationState = 'step2';
    }, 1500);
    this.timeout3 = window.setTimeout(() => {
      this.animationState = 'step3';
    }, 5000);
  }

  shuffleArray(array: (number | "Swap")[]) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  createShuffledArray() {
    // Shuffle the original array
    const shuffledArray = this.shuffleArray([...this.wheelArray]);
    // Repeat the shuffled array 3 more times
    this.multiWheelArray = Array.from({ length: 4 }, () => [...shuffledArray]).flat();
  }

  onAnimationDone(event: AnimationEvent) {
    // Check if the animation is at the final step
    if (event.toState === 'step3') {
      // Add the "highlight" class to the winning 38th element after the wheel stops
      // Incidentally this is the 37th element in the "multiWheelArray" array
      const thirtyEighthElement = this.el.nativeElement.querySelector('.wheel-option:nth-child(38)');
      this.renderer.addClass(thirtyEighthElement, 'highlight');
      // Emit the winning number from the event when the animation is complete
      this.animationDone.emit(this.multiWheelArray[37]);
    }
  }
}
