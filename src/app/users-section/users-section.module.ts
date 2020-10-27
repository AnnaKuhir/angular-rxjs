import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersSectionComponent } from './users-section.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersSectionRoutingModule } from './users-section-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UsersSectionComponent, UserCardComponent],
  imports: [
    CommonModule,
    UsersSectionRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ],
})
export class UsersSectionModule {}
