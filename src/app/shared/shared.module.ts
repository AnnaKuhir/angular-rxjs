import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLoaderComponent } from './components/mat-loader/mat-loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MatLoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [MatLoaderComponent, MatProgressSpinnerModule]
})
export class SharedModule {}
