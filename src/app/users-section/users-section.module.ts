import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersSectionComponent } from './users-section.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersSectionRoutingModule } from './users-section-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [UsersSectionComponent, UserCardComponent ],
  imports: [CommonModule, UsersSectionRoutingModule, FontAwesomeModule ],
})
export class UsersSectionModule {}
