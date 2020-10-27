import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLoaderComponent } from './components/mat-loader/mat-loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MatLoaderComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatLoaderComponent,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
