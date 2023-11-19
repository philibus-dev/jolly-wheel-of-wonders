import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppHeaderComponent } from './app-header.component';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;


  const usersServiceStub = {
    getCurrUser: () => of(null), // Mock the getCurrUser method
  };

  beforeAll(() => {
    window.onbeforeunload = () => 'Keep from actually navigating away.'
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppHeaderComponent],
      providers: [
        { provide: UsersService, useValue: usersServiceStub }
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', redirectTo: '' },
          { path: 'logout', redirectTo: '' }
        ])
      ]
    });

    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
