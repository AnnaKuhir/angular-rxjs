import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../shared/models/user-info';
import { ApiDataService } from '../shared/services/api-data.service';
import { catchError, delay, takeUntil, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-users-section',
  templateUrl: './users-section.component.html',
  styleUrls: ['./users-section.component.scss'],
})
export class UsersSectionComponent implements OnInit, AfterViewInit {
  @Output() users: User[];
  usersArr: User[];
  inputElement$: Observable<any>;
  isLoading: boolean;
  @ViewChild('findUser') findUser: ElementRef;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private apiService: ApiDataService) {
    this.users = [];
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.apiService
      .getUsers()
      .pipe(
        delay(1000),
        takeUntil(this.destroy$),
        catchError((error) => {
          throw 'Error in source. Details: ' + error;
        })
      )
      .subscribe((usersArr: User[]) => {
        if (usersArr) {
          this.usersArr = usersArr;
          this.users = [...this.usersArr];
          this.isLoading = false;
        }
      });
  }

  ngAfterViewInit(): void {
    this.inputElement$ = fromEvent(this.findUser.nativeElement, 'keyup');
    this.inputElement$.subscribe((event) =>
      this.getUserByName(event.target.value)
    );
  }

  getUserByName(name: string) {
    let enteredValue = name.toLowerCase();
    this.users = this.usersArr.filter((user) =>
      user.name.toLowerCase().includes(enteredValue)
    );
  }

  deleteUserCard(user) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
