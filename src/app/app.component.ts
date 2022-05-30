import { Component, OnInit, VERSION } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounce, debounceTime, delay, map, startWith, tap } from 'rxjs/operators';
import { User } from './user';
import { UserService } from './user-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  newUser = new BehaviorSubject<User>(null);
  newUser$ = this.newUser.asObservable();

  filterSubject = new Subject();
  filter$ = this.filterSubject.asObservable();

  cacheList: User[] = [];

  users$: Observable<User[]> = this.userService.fetchUsers().pipe(tap(list => {
    this.cacheList = [...list];
  }));

  outputUser$ = combineLatest(
      [this.users$, this.newUser$, this.filter$.pipe(debounceTime(100), startWith(''))]
    ).pipe(
    map(([list, user, searchValue]) => {
      if(user){
        this.cacheList.push(user);
      }
      return [...this.cacheList.filter((user: User) => user.name === searchValue )];
    })
  )

  constructor(public userService: UserService) {}
  ngOnInit() {}

  newUserReceived(userData: User){
    this.newUser.next(userData)
  }

  filterInputs(search: string){
    this.filterSubject.next(search)
  }
}
