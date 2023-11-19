import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

// models
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceMock {
  constructor() { }

  users: User[] = [];

  getAllUsers(): Observable<User[]> {
    return of(this.users);
  }

  postNewUser(user: User): Observable<User[]> {
    return of(this.users);
  }

  putUpdatedUser(updatedUser: User): Observable<User[]> {
    return of(this.users);
  }

  deleteUser(id: string): Observable<User[]> {
    return of(this.users);
  }
}
