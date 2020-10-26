import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersSectionComponent } from './users-section.component';

const routes: Routes = [{ path: '', component: UsersSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersSectionRoutingModule {}
