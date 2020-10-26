import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLoaderComponent } from './components/mat-loader/mat-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MatLoaderComponent],
  exports: [MatLoaderComponent],
})
export class SharedModule {}
