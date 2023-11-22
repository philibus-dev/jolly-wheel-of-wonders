import { TestBed } from '@angular/core/testing';
import { InstructionsComponent } from './instructions.component';

describe('InstructionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InstructionsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InstructionsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
