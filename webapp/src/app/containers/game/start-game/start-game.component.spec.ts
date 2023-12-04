import { TestBed } from '@angular/core/testing';
import { StartGameComponent } from './start-game.component';

describe('StartGameComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StartGameComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StartGameComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
