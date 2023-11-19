import {fakeAsync, TestBed} from '@angular/core/testing';

import { UsersService } from './users.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {User} from "../models/user";

describe('UsersService', () => {
  let service: UsersService,
    httpController: HttpTestingController;

  const mockUsers: User[] = [
    {
      id: '123-321',
      name: 'John Tester',
      email: 'jTester@email.com'
    }
  ];

  const testUser = {
    nickname: mockUsers[0].name,
    name: mockUsers[0].name,
    picture: 'profile.jpg',
    updated_at: '2023-10-22',
    email: mockUsers[0].email,
    email_verified: true
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(UsersService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users when getAllUsers is called', fakeAsync(() => {
    service.getAllUsers().subscribe((res) => {
      expect(res).toEqual(mockUsers);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: '/api/users'
    });

    req.flush(mockUsers);

  }));

  it('posts new user correctly', () => {
    service.postNewUser(mockUsers[0]).subscribe((res) => {
      expect(res).toEqual(mockUsers);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: '/api/users'
    });

    req.flush({users: mockUsers});
  });

  it('updates user correctly', () => {
    const updatedUser = {
      ...mockUsers[0],
      id: '123'
    }

    service.putUpdatedUser(updatedUser).subscribe((res) => {
      expect(res).toEqual(mockUsers);
    });

    const req = httpController.expectOne({
      method: 'PUT',
      url: `/api/users/123`
    });

    req.flush({users: mockUsers});
  });

  it('deletes user correctly', () => {
    service.deleteUser('123').subscribe((res) => {
      expect(res).toEqual(mockUsers);
    });

    const req = httpController.expectOne({
      method: 'DELETE',
      url: `/api/users/123`
    });

    req.flush({users: mockUsers});
  });

});
