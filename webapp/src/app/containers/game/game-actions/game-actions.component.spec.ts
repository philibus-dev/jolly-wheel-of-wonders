import { TestBed } from '@angular/core/testing';
import { GameActionsComponent } from './game-actions.component';

describe('GameActionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameActionsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GameActionsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
