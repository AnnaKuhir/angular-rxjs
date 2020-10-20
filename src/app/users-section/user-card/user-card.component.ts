import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user-info';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Output() deleteUserCard: EventEmitter<User> = new EventEmitter<User>();
  userAddress: string;
  userCompany: string;

  constructor() {}

  deleteUserItem() {
    this.deleteUserCard.emit(this.user);
  }

  ngOnInit(): void {
    this.userAddress = `${this.user.address.city}, ${this.user.address.street}, ${this.user.address.suite}`;
    this.userCompany = `${this.user.company.name}, ${this.user.company.catchPhrase}`;
  }
}
