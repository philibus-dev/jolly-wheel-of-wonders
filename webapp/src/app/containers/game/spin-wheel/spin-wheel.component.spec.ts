import { TestBed } from '@angular/core/testing';
import { SpinWheelComponent } from './spin-wheel.component';

describe('SpinWheelComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SpinWheelComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SpinWheelComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
