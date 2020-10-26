import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faPhoneSquare,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';

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
  faHome: IconDefinition;
  faBriefcase: IconDefinition;
  faPhone: IconDefinition;
  faSite: IconDefinition;
  faMail: IconDefinition;

  constructor() {
    this.faHome = faHome;
    this.faBriefcase = faBriefcase;
    this.faPhone = faPhoneSquare;
    this.faSite = faSitemap;
    this.faMail = faEnvelope;
  }

  deleteUserItem() {
    this.deleteUserCard.emit(this.user);
  }

  ngOnInit(): void {
    this.userAddress = `${this.user.address.city}, ${this.user.address.street}, ${this.user.address.suite}`;
    this.userCompany = `${this.user.company.name}, ${this.user.company.catchPhrase}`;
  }
}
