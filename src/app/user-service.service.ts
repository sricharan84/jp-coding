import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { delay } from 'rxjs/operators';


const mock = [
  { id: '12', name: 'Namee1', email: 'adh@kdl.com', gender: 'Male' },
  { id: '23', name: 'Namee2', email: 'adh@kd22.com', gender: 'Female' },
  { id: '34', name: 'Namee3', email: 'adh@k33.com', gender: 'Male' },
] as User[];

@Injectable()
export class UserService {
  constructor() {}

  fetchUsers(): Observable<User[]> {
    return of(mock).pipe(delay(1000));;
  }
}
